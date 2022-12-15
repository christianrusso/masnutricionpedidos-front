import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private readonly http: HttpClient) { }

  postRol(rol: Rol) {
    return this.http.post(`${environment.apiRol}/crear`, rol);
  }

  editRol(rol: Rol, id: number) {
    return this.http.put(`${environment.apiRol}/${id}`, rol);
  }

  getRol(id: number) {
    return this.http.get(`${environment.apiRol}/${id}`);
  }
}
