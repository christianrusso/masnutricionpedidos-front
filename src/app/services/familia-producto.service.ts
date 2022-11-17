import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Familia } from '../models/familia';
import { FamiliaEdit } from '../models/familia-edit';

@Injectable({
  providedIn: 'root'
})
export class FamiliaProductoService {

  constructor(private readonly http: HttpClient) { }

  getFamilias() {
    return this.http.get(`${environment.apiFamilia}`);
  }
  postFamilia(familia: Familia) {
    return this.http.post(`${environment.apiFamilia}/crear`, familia);
  }

  getFamilia(id: number) {
    return this.http.get(`${environment.apiFamilia}/${id}`);
  }

  editFamilia(familia: FamiliaEdit, id: number) {
    return this.http.put(`${environment.apiFamilia}/${id}`, familia);
  }

  deleteFamilia(id: number) {
    console.log(id);
    return this.http.delete(`${environment.apiFamilia}/${id}`);
  }
}
