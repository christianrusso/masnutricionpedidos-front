import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private readonly http: HttpClient) { }

  getProvincias() {
    return this.http.get(`${environment.apiProvincia}`);
  }

  getProvincia(id: number) {
    return this.http.get(`${environment.apiProvincia}/${id}`);
  }
}
