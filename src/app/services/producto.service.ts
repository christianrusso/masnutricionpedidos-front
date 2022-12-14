import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';
import { ProductoEdit } from '../models/producto-edit';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private readonly http: HttpClient) { }
  postProducto(producto: Producto) {
    return this.http.post(`${environment.apiProducto}/crear`, producto);
  }

  getProductos() {
    return this.http.get(`${environment.apiProducto}`);
  }

  getProducto(id: number) {
    return this.http.get(`${environment.apiProducto}/${id}`);
  }

  editProducto(producto: ProductoEdit, id: number) {
    return this.http.put(`${environment.apiProducto}/${id}`, producto);
  }

  deleteProducto(id: number) {
    return this.http.delete(`${environment.apiProducto}/${id}`);
  }

}
