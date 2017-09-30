import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contact.component';
import {ContactFormComponent} from './contact-form/contact-form.component';

const ContactsRoutes: Routes = [
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
  { path: 'contacts/new', component: ContactFormComponent},
  { path: 'contacts/:id', component: ContactFormComponent}
];

export const contactsRouting = RouterModule.forChild(ContactsRoutes);
