import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Canal } from '../models/canal';
@Injectable({
  providedIn: 'root'
})
export class CanalService {

  constructor(private readonly http: HttpClient) { }

  getCanales() {
    return this.http.get(`${environment.apiCanal}`);
  }
  postCanal(canal: Canal) {
    return this.http.post(`${environment.apiCanal}/crear`, canal);
  }

}
