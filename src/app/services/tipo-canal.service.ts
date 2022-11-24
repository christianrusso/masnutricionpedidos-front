import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Canal } from '../models-tipo/tipo-canal';
import { CanalEdit } from '../models-tipo/tipo-canal-edit';
@Injectable({
  providedIn: 'root'
})
export class TipoCanalService {

  constructor(private readonly http: HttpClient) { }

  getCanales() {
    return this.http.get(`${environment.apiTipoCanal}`);
  }
  postCanal(canal: Canal) {
    console.log(canal);

    return this.http.post(`${environment.apiTipoCanal}/crear`, canal);
  }

  getCanal(id: number) {
    return this.http.get(`${environment.apiTipoCanal}/${id}`);
  }

  editCanal(canal: CanalEdit, id: number) {
    return this.http.put(`${environment.apiTipoCanal}/${id}`, canal);
  }

  deleteCanal(id: number) {
    console.log(id);
    return this.http.delete(`${environment.apiTipoCanal}/${id}`);
  }

}
