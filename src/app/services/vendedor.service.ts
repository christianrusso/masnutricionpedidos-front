import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private readonly http: HttpClient) { }

  getVendedores() {
    return this.http.get(`${environment.apiVendedor}`);
  }

  getVendedor(id: number) {
    return this.http.get(`${environment.apiVendedor}/${id}`);
  }
}
