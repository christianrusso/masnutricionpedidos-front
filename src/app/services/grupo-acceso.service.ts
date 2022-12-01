import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Acceso } from '../models/grupoAcceso';
import { AccesoEdit } from '../models/grupoAcceso-edit';

@Injectable({
  providedIn: 'root'
})
export class GrupoAccesoService {

  constructor(private readonly http: HttpClient) { }

  getAccesos() {
    return this.http.get(`${environment.apiAcceso}`);
  }
  postAcceso(acceso: Acceso) {
    return this.http.post(`${environment.apiAcceso}/crear`, acceso);
  }

  getAcceso(id: number) {
    return this.http.get(`${environment.apiAcceso}/${id}`);
  }

  editAcceso(acceso: AccesoEdit, id: number) {
    return this.http.put(`${environment.apiAcceso}/${id}`, acceso);
  }

  deleteAcceso(id: number) {
    return this.http.delete(`${environment.apiAcceso}/${id}`);
  }
}
