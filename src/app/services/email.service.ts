import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { EmailEdit } from '../models/email-edit';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private readonly http: HttpClient) { }

  getEmails() {
    return this.http.get(`${environment.apiEmail}`);
  }
  postEmail(email: Email) {
    return this.http.post(`${environment.apiEmail}/crear`, email);
  }

  getEmail(id: number) {
    return this.http.get(`${environment.apiEmail}/${id}`);
  }

  editEmail(email: EmailEdit, id: number) {
    return this.http.put(`${environment.apiEmail}/${id}`, email);
  }

  deleteEmail(id: number) {
    return this.http.delete(`${environment.apiEmail}/${id}`);
  }
}
