import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Condicion } from '../models/condicion';

@Injectable({
  providedIn: 'root'
})
export class CondicionesVentaService {

  constructor(private readonly http: HttpClient) { }

  getCondiciones() {
    return this.http.get(`${environment.apiCondiciones}`);
  }
  postCondicion(condicion: Condicion) {
    return this.http.post(`${environment.apiCondiciones}/crear`, condicion);
  }
}
