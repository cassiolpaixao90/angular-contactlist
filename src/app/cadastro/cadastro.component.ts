import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  contact: ContactComponent = new ContactComponent();
  http: Http;
  meuForm: FormGroup;

  constructor(http: Http, fb: FormBuilder) {

    this.http = http;

    this.meuForm = fb.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
    )],
      url: ['', Validators.required, Validators.minLength(4)],
      fone: ['', Validators.required, Validators.minLength(4)],
    });
  }

  ngOnInit() {
  }

  cadastrar(event) {

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // this.http.post('http://localhost:5000/v1/contacts', JSON.stringify(this.contact), { headers: headers })
    //   .subscribe(() => {
    //     this.contact = new ContactComponent();
    //     console.log('salvo vom sucesso');
    //   }, error => console.log(error));

  }

}
