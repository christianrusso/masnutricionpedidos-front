import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Operacion } from '../models/detalleOperacion';
import { OperacionEdit } from '../models/detalleOperacion-edit';

@Injectable({
  providedIn: 'root'
})
export class DetalleOperacionService {

  constructor(private readonly http: HttpClient) { }

  getOperaciones() {
    return this.http.get(`${environment.apiOperacion}`);
  }
  postOperacion(operacion: Operacion) {
    return this.http.post(`${environment.apiOperacion}/crear`, operacion);
  }

  getOperacion(id: number) {
    return this.http.get(`${environment.apiOperacion}/${id}`);
  }

  editOperacion(operacion: OperacionEdit, id: number) {
    return this.http.put(`${environment.apiOperacion}/${id}`, operacion);
  }

  deleteOperacion(id: number) {
    return this.http.delete(`${environment.apiOperacion}/${id}`);
  }
}
