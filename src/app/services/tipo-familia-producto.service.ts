import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Familia } from '../models-tipo/tipo-familia';
import { FamiliaEdit } from '../models-tipo/tipo-familia-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoFamiliaProductoService {

  constructor(private readonly http: HttpClient) { }

  getFamilias() {
    return this.http.get(`${environment.apiTipoFamilia}`);
  }
  postFamilia(familia: Familia) {
    return this.http.post(`${environment.apiTipoFamilia}/crear`, familia);
  }

  getFamilia(id: number) {
    return this.http.get(`${environment.apiTipoFamilia}/${id}`);
  }

  editFamilia(familia: FamiliaEdit, id: number) {
    return this.http.put(`${environment.apiTipoFamilia}/${id}`, familia);
  }

  deleteFamilia(id: number) {
    console.log(id);
    return this.http.delete(`${environment.apiTipoFamilia}/${id}`);
  }
}
