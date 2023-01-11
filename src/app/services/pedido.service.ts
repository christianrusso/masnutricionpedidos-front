import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';
import { PedidoEdit } from '../models/pedido-edit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private readonly http: HttpClient) { }

  postPedido(pedido: Pedido): Observable<any> {
    return this.http.post(`${environment.apiPedido}/crear`, pedido);
  }

  getPedidos() {
    return this.http.get(`${environment.apiPedido}`);
  }

  getPedido(id: number) {
    return this.http.get(`${environment.apiPedido}/${id}`);
  }

  editPedido(pedido: PedidoEdit, id: number) {
    return this.http.put(`${environment.apiPedido}/${id}`, pedido);
  }

  deletePedido(id: number) {
    return this.http.delete(`${environment.apiPedido}/${id}`);
  }
}
