import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {
  nombres: Array<{ nombre }> = [];
  constructor() {
    this.nombres.push({ nombre: 'Un'});
    this.nombres.push({ nombre: 'Deux'});
    this.nombres.push({nombre: 'Trois'});
  }

  ngOnInit() {
  }


}
