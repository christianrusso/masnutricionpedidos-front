import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models-tipo/tipo-producto';
import { ProductoEdit } from '../models-tipo/tipo-producto-edit';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  constructor(private readonly http: HttpClient) { }

  getProductos() {
    return this.http.get(`${environment.apiProducto}`);
  }
  postProducto(producto: Producto) {
    return this.http.post(`${environment.apiProducto}/crear`, producto);
  }
  getProducto(id: number) {
    return this.http.get(`${environment.apiProducto}/${id}`);
  }
  editProducto(producto: ProductoEdit, id: number) {
    return this.http.put(`${environment.apiProducto}/${id}`, producto);
  }
  deleteProducto(id: number){
    console.log(id);
    return this.http.delete(`${environment.apiProducto}/${id}`);
  }
}
