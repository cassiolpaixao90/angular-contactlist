import { Component, OnInit } from '@angular/core';
import {ContactsService} from "./shared/contacts.service";
import {Contact} from "./shared/contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactsComponent implements OnInit {

  private contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(data => this.contacts = data);
  }

  deleteContact(contact){
    if (confirm("Are you sure you want to delete " + contact.name + "?")) {
      var index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
      this.contactsService.deleteContacts(contact.id)
        .subscribe(null,
          err => {
            alert("Could not delete contact.");
            // Revert the view back to its original state
            this.contacts.splice(index, 0, contact);
          });
    }
  }

}
