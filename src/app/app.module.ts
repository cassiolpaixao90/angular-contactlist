import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { HttpModule  } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelComponent } from './painel/painel.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    PainelComponent,
    CadastroComponent,
    ListagemComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
