import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from '../models/empresa';
import { EmpresaEdit } from '../models/empresa-edit';

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

  postEmpresa(empresa: Empresa) {
    return this.http.post(`${environment.apiEmpresa}/crear`, empresa);
  }

  editEmpresa(empresa: EmpresaEdit, id: number) {
    return this.http.put(`${environment.apiEmpresa}/${id}`, empresa);
  }

  deleteEmpresa(id: number) {
    return this.http.delete(`${environment.apiEmpresa}/${id}`);
  }
}
