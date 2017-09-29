import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {


  @Input() titulo: string ;
  @Input() url: string;
  fone: string ;

  constructor() { }

  ngOnInit() {
  }

}
