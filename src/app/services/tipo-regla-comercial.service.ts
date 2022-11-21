import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Regla } from '../models/regla';
import { ReglaEdit } from '../models/regla-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoReglaComercialService {

  constructor(private readonly http: HttpClient) { }

  getReglas() {
    return this.http.get(`${environment.apiRegla}`);
  }
  postRegla(regla: Regla) {
    return this.http.post(`${environment.apiRegla}/crear`, regla);
  }
  getRegla(id: number) {
    return this.http.get(`${environment.apiRegla}/${id}`);
  }
  editRegla(regla: ReglaEdit, id: number) {
    return this.http.put(`${environment.apiRegla}/${id}`, regla);
  }
  deleteRegla(id: number){
    return this.http.delete(`${environment.apiRegla}/${id}`);
  }

}
