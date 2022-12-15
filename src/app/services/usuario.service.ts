import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { UsuarioEdit } from '../models/usuario-edit';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private readonly http: HttpClient) { }

  postUsuario(usuario: Usuario) {
    console.log(usuario);

    return this.http.post(`${environment.apiUsuario}/signup`, usuario);
  }

  getUsuarios() {
    return this.http.get(`${environment.apiUsuario}`);
  }

  getUsuario(id: number) {
    return this.http.get(`${environment.apiUsuario}/${id}`);
  }

  editUsuario(usuario: UsuarioEdit, id: number) {
    return this.http.put(`${environment.apiUsuario}/${id}`, usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${environment.apiUsuario}/${id}`);
  }
}
