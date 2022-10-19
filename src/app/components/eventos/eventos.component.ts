import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  show: boolean = false; //aqui estamos usando o show em false

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    // aqui temos uma função de eventos, que está void (vazia), porque com eventos normalmente ela é vazia mesmo
    this.show = !this.show; // aqui temos um retorno, onde ao clique do button la no html ela vai mostrar a mensagem e se clicado ele será ocultada de novo, ou seja o efeito reverso, para fazer isso é só usar o ponto de exclamção como foi usado no !this.show
  }
}
