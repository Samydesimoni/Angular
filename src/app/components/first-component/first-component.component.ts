import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component', //aqui temos o seletor que vamos declarar no app.component.html, é assim que conseguimos renderizar em tela
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name = 'Matheus';
  age = 30;
  job = 'programador';

  constructor() {}

  ngOnInit(): void {}
}

// Aqui temos os typescript, onde vamos declarar as variaveis para poder exportar para o componente html
