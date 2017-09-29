import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  @Input() titulo: string;
  @Output() removeElement: EventEmitter<Event>;

  private elemento: ElementRef;

  constructor(elemento: ElementRef) {
    this.elemento = elemento;
  }

  ngOnInit() {
    this.titulo = this.titulo.length > 7
      ? `{this.titulo.substr(0, 7)}...`
      : this.titulo;
  }

  fadeOut(cb) {   
    // erro de compilação! Não entra o $!
    //  $(this.elemento.nativeElement).fadeOut(cb);
 }

}
