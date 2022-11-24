import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IVA } from '../models-tipo/tipo-iva';
import { IVAEdit } from '../models-tipo/tipo-iva-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoIvaService {

  constructor(private readonly http: HttpClient) { }

  getIVAs() {
    return this.http.get(`${environment.apiTipoIVA}`);
  }
  getIVA(id: number) {
    return this.http.get(`${environment.apiTipoIVA}/${id}`);
  }
  editIVA(iva: IVAEdit, id: number) {
    return this.http.put(`${environment.apiTipoIVA}/${id}`, iva);
  }
  postIVA(iva: IVA) {
    return this.http.post(`${environment.apiTipoIVA}/crear`, iva);
  }
  deleteIVA(id: number){
    return this.http.delete(`${environment.apiTipoIVA}/${id}`);
  }
}
