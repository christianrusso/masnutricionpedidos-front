import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthData } from '../components/auth/AuthData';
import { LoginUserData } from '../models/usuario';

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
    return this.http
      .post<{ token: string; expiresIn: number }>(
        `${environment.apiUsuario}/login`,
        authData
      );
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

  saveAuthData(authData: LoginUserData) {
    if (authData.token && authData.isInactivo != 1) {
      this.setAuthTimer(Number(authData.expiresIn)); 
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      const now = new Date();
      const expirationDate = new Date(
        now.getTime() + Number(authData.expiresIn) * 1000
      );
      localStorage.setItem('token', authData.token);
      localStorage.setItem('expiration', expirationDate.toISOString());
      localStorage.setItem('idEmpresa', authData.idEmpresa.toString());
      localStorage.setItem('idUsuario', authData.idUsuario.toString());
      localStorage.setItem('idGrupoAcceso', authData.idGrupoAcceso.toString());
      localStorage.setItem('NickName', authData.NickName);
      localStorage.setItem('NombreApellido', authData.NombreApellido);
      localStorage.setItem('CodInterno', authData.CodInterno.toString());
      localStorage.setItem('Email', authData.Email);
      localStorage.setItem('isAdmin', authData.isAdmin.toString());
      localStorage.setItem('isInactivo', authData.isInactivo.toString());
      localStorage.setItem('isBorrado',  authData.isBorrado.toString());
      localStorage.setItem('usuarioGraba', authData.usuarioGraba);
    } else {
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
    }
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
