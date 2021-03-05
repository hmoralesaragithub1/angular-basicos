import { Component } from '@angular/core';

//import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 40;

  imprimeNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  /** getter */
  get aMayusculas(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Hulk';
  }

  cambiarEdad(): void {
    this.edad = 50;
  }
}
