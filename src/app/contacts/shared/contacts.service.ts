import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactsService {

  private url: string = 'https://nodejs-todolist-api.herokuapp.com/contacts/clp';

  constructor(private http: Http) { 
  }

  getContacts(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getContact(id){
    return this.http.get(this.getContactUrl(id))
      .map(res => res.json());
  }

  addContact(contact){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(contact), options)
      .map(res => res.json());
  }

  updateContact(contact){
    console.log(contact);
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.getContactUrl(contact._id), JSON.stringify(contact), options)
      .map(res => res.json());
  }

  deleteContacts(id){
    console.log('deleteContacts', id);
    return this.http.delete(this.getContactUrl(id))
      .map(res => res.json());
  }

  private getContactUrl(id){
    return this.url + "/" + id;
  }
}
