import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthData } from '../components/auth/AuthData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated = false;
  private token: any;
  private rol: any;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  postLogin(authData: AuthData) {
    console.log(authData);

    return this.http
      .post<{ token: string; expiresIn: number }>(
        `${environment.apiUsuario}/login`,
        authData
      )
      .subscribe(async (response: any) => {
        const token = await response.token;
        const idEmpresa = await response.idEmpresa;
        const idUsuario = await response.idUsuario;
        const idGrupoAcceso = await response.idGrupoAcceso;
        const NickName = await response.NickName;
        const NombreApellido = await response.NombreApellido;
        const CodInterno = await response.CodInterno;
        const Email = await response.Email;
        const isAdmin = await response.isAdmin;
        const isInactivo = await response.isInactivo;
        const isBorrado = await response.isBorrado;
        const usuarioGraba = await response.usuarioGraba;
        this.token = token;
        if (token && isInactivo != 1) {
          const expiresInDuration = await response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(
            token,
            expirationDate,
            idEmpresa,
            idUsuario,
            idGrupoAcceso,
            NickName,
            NombreApellido,
            CodInterno,
            Email,
            isAdmin,
            isInactivo,
            isBorrado,
            usuarioGraba
          );
          this.router.navigateByUrl('/home');
        } else {
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
        }
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0 && parseInt(authInformation.isInactivo) != 1) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['']);
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    idEmpresa: number,
    idUsuario: number,
    idGrupoAcceso: number,
    NickName: string,
    NombreApellido: string,
    CodInterno: number,
    Email: string,
    isAdmin: number,
    isInactivo: number,
    isBorrado: number,
    usuarioGraba: string
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('idEmpresa', idEmpresa.toString());
    localStorage.setItem('idUsuario', idUsuario.toString());
    localStorage.setItem('idGrupoAcceso', idGrupoAcceso.toString());
    localStorage.setItem('NickName', NickName);
    localStorage.setItem('NombreApellido', NombreApellido);
    localStorage.setItem('CodInterno', CodInterno.toString());
    localStorage.setItem('Email', Email);
    localStorage.setItem('isAdmin', isAdmin.toString());
    localStorage.setItem('isInactivo', isInactivo.toString());
    localStorage.setItem('isBorrado', isBorrado.toString());
    localStorage.setItem('usuarioGraba', usuarioGraba);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('idEmpresa');
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('idGrupoAcceso');
    localStorage.removeItem('NickName');
    localStorage.removeItem('NombreApellido');
    localStorage.removeItem('CodInterno');
    localStorage.removeItem('Email');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isInactivo');
    localStorage.removeItem('isBorrado');
    localStorage.removeItem('usuarioGraba');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const idEmpresa = localStorage.getItem('idEmpresa');
    const idUsuario = localStorage.getItem('idUsuario');
    const idGrupoAcceso = localStorage.getItem('idGrupoAcceso');
    const NickName = localStorage.getItem('NickName');
    const NombreApellido = localStorage.getItem('NombreApellido');
    const CodInterno = localStorage.getItem('CodInterno');
    const Email = localStorage.getItem('Email');
    const isAdmin = localStorage.getItem('isAdmin');
    const isInactivo = localStorage.getItem('isInactivo');
    const isBorrado = localStorage.getItem('isBorrado');
    const usuarioGraba = localStorage.getItem('usuarioGraba');
    if (
      !token ||
      !expirationDate ||
      !idEmpresa ||
      !idUsuario ||
      !idGrupoAcceso ||
      !NickName ||
      !NombreApellido ||
      !CodInterno ||
      !Email ||
      !isAdmin ||
      !isInactivo ||
      !isBorrado ||
      !usuarioGraba
    ) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      idEmpresa: idEmpresa,
      idUsuario: idUsuario,
      idGrupoAcceso: idGrupoAcceso,
      NickName: NickName,
      NombreApellido: NombreApellido,
      CodInterno: CodInterno,
      Email: Email,
      isAdmin: isAdmin,
      isInactivo: isInactivo,
      isBorrado: isBorrado,
      usuarioGraba: usuarioGraba,
    };
  }
}
