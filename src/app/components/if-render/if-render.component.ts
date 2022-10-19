import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true; //aqui temos o canShow mencionado no html
  name = 'Julio'; //e a aqui temos o nome mencionado no html (note que ele é diferente de Matheus, então ele não deve aparecer em tela)

  constructor() {}

  ngOnInit(): void {}
}
