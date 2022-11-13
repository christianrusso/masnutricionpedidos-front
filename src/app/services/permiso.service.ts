import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Permiso } from '../models/permiso';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  constructor(private readonly http: HttpClient) { }

  getPermisos() {
    return this.http.get(`${environment.apiPermiso}`);
  }
  postPermiso(permiso: Permiso) {
    return this.http.post(`${environment.apiPermiso}/crear`, permiso);
  }
}
