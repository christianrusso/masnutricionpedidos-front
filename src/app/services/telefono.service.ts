import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Telefono } from '../models/telefono';
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
}
