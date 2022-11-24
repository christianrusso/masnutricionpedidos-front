import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Regla } from '../models-tipo/tipo-regla';
import { ReglaEdit } from '../models-tipo/tipo-regla-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoReglaComercialService {

  constructor(private readonly http: HttpClient) { }

  getReglas() {
    return this.http.get(`${environment.apiTipoRegla}`);
  }
  postRegla(regla: Regla) {
    return this.http.post(`${environment.apiTipoRegla}/crear`, regla);
  }
  getRegla(id: number) {
    return this.http.get(`${environment.apiTipoRegla}/${id}`);
  }
  editRegla(regla: ReglaEdit, id: number) {
    return this.http.put(`${environment.apiTipoRegla}/${id}`, regla);
  }
  deleteRegla(id: number){
    return this.http.delete(`${environment.apiTipoRegla}/${id}`);
  }

}
