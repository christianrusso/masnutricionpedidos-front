import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaProducto } from '../models/categoria-producto';
import { CategoriaProductoEdit } from '../models/categoria-producto-edit';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProductoService {

  constructor(private readonly http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${environment.apiCategoria}`);
  }
  postCategoria(categoria: CategoriaProducto) {
    return this.http.post(`${environment.apiCategoria}/crear`, categoria);
  }

  getCategoria(id: number) {
    return this.http.get(`${environment.apiCategoria}/${id}`);
  }

  editCategoria(categoria: CategoriaProductoEdit, id: number) {
    return this.http.put(`${environment.apiCategoria}/${id}`, categoria);
  }

  deleteCategoria(id: number) {
    return this.http.delete(`${environment.apiCategoria}/${id}`);
  }
}
