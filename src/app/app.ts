import { Component } from '@angular/core';
import { Perfil } from './perfil/perfil';
import { ListaTareas } from './lista-tareas/lista-tareas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Perfil, ListaTareas],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}