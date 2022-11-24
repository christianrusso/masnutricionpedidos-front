import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models-tipo/tipo-cliente';
import { ClienteEdit } from '../models-tipo/tipo-cliente-edit';
@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {

  constructor(private readonly http: HttpClient) { }

  getClientes() {
    return this.http.get(`${environment.apiTipoCliente}`);
  }
  postCliente(cliente: Cliente) {
    return this.http.post(`${environment.apiTipoCliente}/crear`, cliente);
  }

  getCliente(id: number) {
    return this.http.get(`${environment.apiTipoCliente}/${id}`);
  }

  editCliente(cliente: ClienteEdit, id: number) {
    return this.http.put(`${environment.apiTipoCliente}/${id}`, cliente);
  }

  deleteCliente(id: number) {
    console.log(id);
    return this.http.delete(`${environment.apiTipoCliente}/${id}`);
  }
}
