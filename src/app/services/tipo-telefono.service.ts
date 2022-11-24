import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Telefono } from '../models-tipo/tipo-telefono';
import { TelefonoEdit } from '../models-tipo/tipo-telefono-edit';
@Injectable({
  providedIn: 'root'
})
export class TipoTelefonoService {

  constructor(private readonly http: HttpClient) { }

  getTelefonos() {
    return this.http.get(`${environment.apiTipoTelefono}`);
  }
  postTelefono(telefono: Telefono) {
    return this.http.post(`${environment.apiTipoTelefono}/crear`, telefono);
  }
  getTelefono(id: number) {
    return this.http.get(`${environment.apiTipoTelefono}/${id}`);
  }
  editTelefono(telefono: TelefonoEdit, id: number) {
    return this.http.put(`${environment.apiTipoTelefono}/${id}`, telefono);
  }
  deleteTelefono(id: number){
    return this.http.delete(`${environment.apiTipoTelefono}/${id}`);
  }
}
