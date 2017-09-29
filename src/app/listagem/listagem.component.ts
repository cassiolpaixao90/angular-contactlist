import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { ContactService } from '../contact/contact.service';
import { ContactModule } from '../contact/contact.module';



@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
 
  contacts: ContactModule[];

  constructor(private _contactService: ContactService) {
    // http
    //   .get('http://localhost:5000/v1/contacts')
    //   .map(res => res.json())
    //   .subscribe(contacts => {
    //     this.contacts = contacts;
    //     console.log(contacts);
    //   }, error => console.log(error));
  }

  ngOnInit(): void {
    this.contacts = this._contactService.getContacts();
  }
}
