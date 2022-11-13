import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private readonly http: HttpClient) { }

  getProductos() {
    return this.http.get(`${environment.apiProducto}`);
  }
  postProducto(producto: Producto) {
    return this.http.post(`${environment.apiProducto}/crear`, producto);
  }
}
