import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private readonly http: HttpClient) { }

  getEmpresas() {
    return this.http.get(`${environment.apiEmpresa}`);
  }

  getEmpresa(id: number) {
    return this.http.get(`${environment.apiEmpresa}/${id}`);
  }
}
