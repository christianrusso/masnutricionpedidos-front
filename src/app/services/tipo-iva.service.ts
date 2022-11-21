import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IVA } from '../models/iva';
import { IVAEdit } from '../models/iva-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoIvaService {

  constructor(private readonly http: HttpClient) { }

  getIVAs() {
    return this.http.get(`${environment.apiIVA}`);
  }
  getIVA(id: number) {
    return this.http.get(`${environment.apiIVA}/${id}`);
  }
  editIVA(iva: IVAEdit, id: number) {
    return this.http.put(`${environment.apiIVA}/${id}`, iva);
  }
  postIVA(iva: IVA) {
    return this.http.post(`${environment.apiIVA}/crear`, iva);
  }
  deleteIVA(id: number){
    return this.http.delete(`${environment.apiIVA}/${id}`);
  }
}
