import { Component, input, output } from '@angular/core';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [],
  templateUrl: './tarea-item.html',
  styleUrls: ['./tarea-item.css']
})
export class TareaItem {

  tarea = input.required<Tarea>();

  completar = output<number>();
  eliminar = output<number>();

  alCompletar() {
    this.completar.emit(this.tarea().id);
  }

  alEliminar() {
    this.eliminar.emit(this.tarea().id);
  }
}