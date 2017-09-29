import {Pipe, PipeTransform} from '@angular/core';
import { ContactComponent } from './contact.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(contacts: ContactComponent[], digitado: string): ContactComponent[] {

        digitado = digitado.toLowerCase();
        return contacts.filter( contact => contact.titulo.toLowerCase().includes(digitado));
    }
}