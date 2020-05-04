import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  text: String = 'date';

  color = 'blue';
  changeColor(color: string): void {
    this.color = color ;
  }

  texte : String = "Bonjour mon petit correcteur ! :) ";
}
