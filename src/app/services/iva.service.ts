import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IVA } from '../models/iva';

@Injectable({
  providedIn: 'root'
})
export class IvaService {

  constructor(private readonly http: HttpClient) { }

  getIVA() {
    return this.http.get(`${environment.apiIVA}`);
  }
  postIVA(iva: IVA) {
    return this.http.post(`${environment.apiIVA}/crear`, iva);
  }
}
