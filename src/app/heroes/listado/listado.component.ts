import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Aquaman'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    /*si es undefined retornas no hay que borrar*/
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
