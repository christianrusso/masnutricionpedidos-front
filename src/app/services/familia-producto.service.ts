import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Familia } from '../models/familia';

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
}
