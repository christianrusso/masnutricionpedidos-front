import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetallePedido } from '../models/detallePedido';
import { DetallePedidoEdit } from '../models/detallePedido-edit';

@Injectable({
  providedIn: 'root'
})
export class DetallePedidoService {

  constructor(private readonly http: HttpClient) { }

  getDetallePedidos() {
    return this.http.get(`${environment.apiDetallePedido}`);
  }
  postDetallePedido(detalle: DetallePedido) {
    return this.http.post(`${environment.apiDetallePedido}/crear`, detalle);
  }

  getDetallePedido(id: number) {
    return this.http.get(`${environment.apiDetallePedido}/${id}`);
  }

  editDetallePedido(detalle: DetallePedidoEdit, id: number) {
    return this.http.put(`${environment.apiDetallePedido}/${id}`, detalle);
  }

  deleteDetallePedido(id: number) {
    return this.http.delete(`${environment.apiDetallePedido}/${id}`);
  }
}
