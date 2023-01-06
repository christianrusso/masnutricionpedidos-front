import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PedidoEdit } from '../models/pedido-edit';

@Injectable({
  providedIn: 'root'
})
export class ProductosPorPedidoService {

  constructor(private readonly http: HttpClient) { }



  getProductos(id: number) {
    return this.http.get(`${environment.apiProductosPorPedido}/${id}`);
  }

  editProducto(pedido: PedidoEdit, id: number) {
    return this.http.put(`${environment.apiProductosPorPedido}/${id}`, pedido);
  }
}
