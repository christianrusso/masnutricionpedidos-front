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
    return this.http.get(`${environment.apiTipoProducto}`);
  }
  postProducto(producto: Producto) {
    return this.http.post(`${environment.apiTipoProducto}/crear`, producto);
  }
  getProducto(id: number) {
    return this.http.get(`${environment.apiTipoProducto}/${id}`);
  }
  editProducto(producto: ProductoEdit, id: number) {
    return this.http.put(`${environment.apiTipoProducto}/${id}`, producto);
  }
  deleteProducto(id: number){
    console.log(id);
    return this.http.delete(`${environment.apiTipoProducto}/${id}`);
  }
}
