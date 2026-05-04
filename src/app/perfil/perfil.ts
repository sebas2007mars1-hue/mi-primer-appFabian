import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {

  nombre: string = "Sebastian";
  profesion: string = "Desarrollador";

  habilidades: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "Angular",
    "TypeScript"
  ];

  mostrarHabilidades: boolean = false;
  contadorLikes: number = 0;
  disponible: boolean = true;

  alternarHabilidades(): void {
    this.mostrarHabilidades = !this.mostrarHabilidades;
  }

  darLike(): void {
    this.contadorLikes++;
  }

  cambiarEstado(): void {
    this.disponible = !this.disponible;
  }
}