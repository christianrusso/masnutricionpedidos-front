import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Regla } from '../models/regla';

@Injectable({
  providedIn: 'root'
})
export class ReglaComercialService {

  constructor(private readonly http: HttpClient) { }

  getReglas() {
    return this.http.get(`${environment.apiRegla}`);
  }
  postRegla(regla: Regla) {
    return this.http.post(`${environment.apiRegla}/crear`, regla);
  }
}
