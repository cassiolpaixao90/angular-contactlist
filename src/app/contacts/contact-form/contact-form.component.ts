import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from '../shared/contact';
import { ContactsService } from '../shared/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  contact: Contact = new Contact();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(3)]],

    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      console.log('idparameter', id);
      
      this.title = id ? 'Edit Contact' : 'New Contact';

      if (!id) {
        return;
      }

      this.contactsService.getContact(id)
        .subscribe(
        contact => {
          this.contact = contact;
          console.log(contact);
          
        },
        response => {
          if (response.status === 404) {
            this.router.navigate  (['NotFound']);
          }
        });
    });
  }

  save() {
    var result,
    contactValue = this.form.value;
    
    if (this.contact._id) {
      console.log('update', contactValue.id);
      result = this.contactsService.updateContact(this.contact);
    } else {
      result = this.contactsService.addContact(contactValue);
    }

    result.subscribe(data => this.router.navigate(['contacts']));
  }
}
