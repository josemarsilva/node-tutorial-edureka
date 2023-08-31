import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent {

  cursos: string[] = ["Angular 2"];
  
  mostrarCursos: boolean = false;


  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
