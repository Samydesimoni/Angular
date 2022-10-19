import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // para compartilhar informações usamos o decorator Input. Podemos ver que ele está chamando esses dados de outro componente, no caso o pai dele (app.component.ts)
  @Input() userData!: { email: string; role: string };

  constructor() {}

  ngOnInit(): void {}
}
