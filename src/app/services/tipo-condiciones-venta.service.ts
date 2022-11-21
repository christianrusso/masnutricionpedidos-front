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
    return this.http.get(`${environment.apiCondiciones}`);
  }
  postCondicion(condicion: Condicion) {
    return this.http.post(`${environment.apiCondiciones}/crear`, condicion);
  }

  getCondicion(id: number) {
    return this.http.get(`${environment.apiCondiciones}/${id}`);
  }

  editCondicion(condicion: CondicionEdit, id: number) {
    return this.http.put(`${environment.apiCondiciones}/${id}`, condicion);
  }

  deleteCondicion(id: number) {
    console.log(id);
    return this.http.delete(`${environment.apiCondiciones}/${id}`);
  }
}
