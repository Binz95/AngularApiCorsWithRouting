import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = 'Contacts WebApi Cors';
contacts: Contact[];
constructor ( private http : HttpClient){}

ngOnInit(){
  this.http.get<Contact[]>("http://localhost:49379/api/contacts")
  .subscribe(contacts => this.contacts = contacts);
 }
}
