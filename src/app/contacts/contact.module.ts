import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ContactsComponent } from './contact.component';
import { ContactsService } from './shared/contacts.service';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    ContactsComponent,
    ContactFormComponent
  ],
  exports: [
    ContactsComponent
  ],
  providers: [
    ContactsService
  ]
})
export class ContactModule { }
