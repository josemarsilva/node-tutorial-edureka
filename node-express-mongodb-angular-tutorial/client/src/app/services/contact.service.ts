import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Updated import
import { Contact } from '../model/contact';
import { Observable } from 'rxjs'; // Add this import for the Observable type

// DEPRECATED: import {Http, Headers}  from '@angular/http';
// DEPRECATED: import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { } // Use HttpClient instead of Http

  // get contacts 
  getContacts(): Observable<any> { // Update the return type to Observable<any>
    return this.http.get('http://localhost:3000/api/contacts');
  }

  // add contact method
  addContact(newContact: Contact): Observable<any> { // Update the parameter type to 'Contact'
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, { headers: headers });
  }
  
  // delete method
  deleteContact(id: string): Observable<any> { // Update the parameter type to 'string'
    return this.http.delete('http://localhost:3000/api/contact/' + id);
  }
  
}
