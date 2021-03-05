import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  titulo: string = 'App Contador';
  contador: number = 10;
  base: number = 5;

  gestionar(valor: number) {
    this.contador += valor;
  }
}
