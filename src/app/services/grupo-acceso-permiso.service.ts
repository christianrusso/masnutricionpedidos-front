import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccesoPermiso } from '../models/grupoAccesoPermiso';
import { AccesoPermisoEdit } from '../models/grupoAccesoPermiso-edit';

@Injectable({
  providedIn: 'root'
})
export class GrupoAccesoPermisoService {

  constructor(private readonly http: HttpClient) { }

  getAccesoPermisos() {
    return this.http.get(`${environment.apiAccesoPermiso}`);
  }
  postAccesoPermiso(accesoPermiso: AccesoPermiso) {
    return this.http.post(`${environment.apiAccesoPermiso}/crear`, accesoPermiso);
  }

  getAccesoPermiso(id: number) {
    return this.http.get(`${environment.apiAccesoPermiso}/${id}`);
  }

  editAccesoPermiso(accesoPermiso: AccesoPermisoEdit, id: number) {
    return this.http.put(`${environment.apiAccesoPermiso}/${id}`, accesoPermiso);
  }

  deleteAccesoPermiso(id: number) {
    return this.http.delete(`${environment.apiAccesoPermiso}/${id}`);
  }
}
