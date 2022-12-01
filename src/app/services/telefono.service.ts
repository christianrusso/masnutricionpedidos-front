import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Telefono } from '../models/telefono';
import { TelefonoEdit } from '../models/telefono-edit';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  constructor(private readonly http: HttpClient) { }

  getTelefonos() {
    return this.http.get(`${environment.apiTelefono}`);
  }
  postTelefono(telefono: Telefono) {
    return this.http.post(`${environment.apiTelefono}/crear`, telefono);
  }

  getTelefono(id: number) {
    return this.http.get(`${environment.apiTelefono}/${id}`);
  }

  editTelefono(telefono: TelefonoEdit, id: number) {
    return this.http.put(`${environment.apiTelefono}/${id}`, telefono);
  }

  deleteTelefono(id: number) {
    return this.http.delete(`${environment.apiTelefono}/${id}`);
  }
}
