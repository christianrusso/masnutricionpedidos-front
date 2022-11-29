import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VendedorEdit } from '../models/vendedor-edit';
import { Vendedor } from '../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private readonly http: HttpClient) { }

  postVendedor(vendedor: Vendedor) {
    return this.http.post(`${environment.apiVendedor}/crear`, vendedor);
  }

  getVendedores() {
    return this.http.get(`${environment.apiVendedor}`);
  }

  getVendedor(id: number) {
    return this.http.get(`${environment.apiVendedor}/${id}`);
  }

  editVendedor(vendedor: VendedorEdit, id: number) {
    return this.http.put(`${environment.apiVendedor}/${id}`, vendedor);
  }

  deleteVendedor(id: number) {
    return this.http.delete(`${environment.apiVendedor}/${id}`);
  }
}
