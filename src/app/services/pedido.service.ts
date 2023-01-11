import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';
import { PedidoEdit } from '../models/pedido-edit';
import { ProductoPedidoData } from '../models/ProductosPedidoData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private readonly http: HttpClient) { }

  postPedido(pedido: Pedido, productos: ProductoPedidoData[]): Observable<any> {
    return this.http.post<{ idVentaCreada: number; Status: number}>(`${environment.apiPedido}/crear`, {pedido, productos});
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
