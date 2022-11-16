import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private readonly http: HttpClient) { }

  getClientes() {
    return this.http.get(`${environment.apiCliente}`);
  }
  postCliente(cliente: Cliente) {
    return this.http.post(`${environment.apiCliente}/crear`, cliente);
  }
}
