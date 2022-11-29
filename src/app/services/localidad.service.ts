import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Localidad } from '../models/localidad';
import { LocalidadEdit } from '../models/localidad-edit';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private readonly http: HttpClient) { }

  postLocalidad(localidad: Localidad) {
    return this.http.post(`${environment.apiLocalidad}/crear`, localidad);
  }

  getLocalidades() {
    return this.http.get(`${environment.apiLocalidad}`);
  }

  getLocalidad(id: number) {
    return this.http.get(`${environment.apiLocalidad}/${id}`);
  }

  editLocalidad(localidad: LocalidadEdit, id: number) {
    return this.http.put(`${environment.apiLocalidad}/${id}`, localidad);
  }

  deleteLocalidad(id: number) {
    return this.http.delete(`${environment.apiLocalidad}/${id}`);
  }
}
