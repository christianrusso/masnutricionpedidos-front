import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Permiso } from '../models-tipo/tipo-permiso';
import { PermisoEdit } from '../models-tipo/tipo-permiso-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoPermisoService {

  constructor(private readonly http: HttpClient) { }

  getPermisos() {
    return this.http.get(`${environment.apiPermiso}`);
  }
  postPermiso(permiso: Permiso) {
    return this.http.post(`${environment.apiPermiso}/crear`, permiso);
  }
  getPermiso(id: number) {
    return this.http.get(`${environment.apiPermiso}/${id}`);
  }

  editPermiso(permiso: PermisoEdit, id: number) {
    return this.http.put(`${environment.apiPermiso}/${id}`, permiso);
  }

  deletePermiso(id: number) {
    console.log(id);
    return this.http.delete(`${environment.apiPermiso}/${id}`);
  }
}
