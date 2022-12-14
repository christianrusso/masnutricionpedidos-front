import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Condicion } from '../models-tipo/tipo-condicion';
import { CondicionEdit } from '../models-tipo/tipo-condicion-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoCondicionesVentaService {

  constructor(private readonly http: HttpClient) { }

  getCondiciones() {
    return this.http.get(`${environment.apiTipoCondiciones}`);
  }
  postCondicion(condicion: Condicion) {
    return this.http.post(`${environment.apiTipoCondiciones}/crear`, condicion);
  }

  getCondicion(id: number) {
    return this.http.get(`${environment.apiTipoCondiciones}/${id}`);
  }

  editCondicion(condicion: CondicionEdit, id: number) {
    return this.http.put(`${environment.apiTipoCondiciones}/${id}`, condicion);
  }

  deleteCondicion(id: number) {
    console.log(id);
    return this.http.delete(`${environment.apiTipoCondiciones}/${id}`);
  }
}
