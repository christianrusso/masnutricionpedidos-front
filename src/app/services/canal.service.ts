import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Canal } from '../models/canal';
import { CanalEdit } from '../models/canal-edit';
@Injectable({
  providedIn: 'root'
})
export class CanalService {

  constructor(private readonly http: HttpClient) { }

  getCanales() {
    return this.http.get(`${environment.apiCanal}`);
  }
  postCanal(canal: Canal) {
    console.log(canal);

    return this.http.post(`${environment.apiCanal}/crear`, canal);
  }

  getCanal(id: number) {
    return this.http.get(`${environment.apiCanal}/${id}`);
  }

  editCanal(canal: CanalEdit, id: number) {
    return this.http.put(`${environment.apiCanal}/${id}`, canal);
  }

  deleteCanal(id: number) {
    return this.http.delete(`${environment.apiCanal}/${id}`);
  }

}
