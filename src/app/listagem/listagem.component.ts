import { Component } from '@angular/core';

import { Http } from '@angular/http';



@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent {

  fotos: Object[] = [];

  constructor(http: Http) {

    http
      .get('http://localhost:5000/v1/fotos')
      .map(res => res.json())
      .subscribe(fotos => {
        this.fotos = fotos;
        console.log(fotos);
      }, error => console.log(error));

  }
}
