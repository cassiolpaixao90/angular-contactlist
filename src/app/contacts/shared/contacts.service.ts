import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactsService {

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getContacts(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getContact(id){
    return this.http.get(this.getContactUrl(id))
      .map(res => res.json());
  }

  addContact(contact){
    return this.http.post(this.url, JSON.stringify(contact))
      .map(res => res.json());
  }

  updateContact(contact){
    return this.http.put(this.getContactUrl(contact.id), JSON.stringify(contact))
      .map(res => res.json());
  }

  deleteContacts(id){
    console.log(id);
    return this.http.delete(this.getContactUrl(id))
      .map(res => res.json());
  }

  private getContactUrl(id){
    return this.url + "/" + id;
  }
}
