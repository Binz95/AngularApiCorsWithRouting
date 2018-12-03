import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  getContacts():Observable<Contact[]>
  {
    return this.http.get<Contact[]>("http://localhost:49379/api/contacts");
  }
  getContact(id: number): Observable<Contact>
  {
    return this.http.get<Contact>("http://localhost:49379/api/contacts/" + id);
  }
}
