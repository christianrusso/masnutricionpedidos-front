import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private readonly http: HttpClient) { }

  getLocalidades() {
    return this.http.get(`${environment.apiLocalidad}`);
  }

  getLocalidad(id: number) {
    return this.http.get(`${environment.apiLocalidad}/${id}`);
  }
}
