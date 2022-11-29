import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Provincia } from '../models/provincia';
import { ProvinciaEdit } from '../models/provincia-edit';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private readonly http: HttpClient) { }

  postProvincia(provincia: Provincia) {
    return this.http.post(`${environment.apiProvincia}/crear`, provincia);
  }

  getProvincias() {
    return this.http.get(`${environment.apiProvincia}`);
  }

  getProvincia(id: number) {
    return this.http.get(`${environment.apiProvincia}/${id}`);
  }

  editProvincia(provincia: ProvinciaEdit, id: number) {
    return this.http.put(`${environment.apiProvincia}/${id}`, provincia);
  }

  deleteProvincia(id: number) {
    return this.http.delete(`${environment.apiProvincia}/${id}`);
  }
}
