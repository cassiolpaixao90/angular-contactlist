import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
// import { FiltroPorTitulo } from './contact.pipe';

@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
