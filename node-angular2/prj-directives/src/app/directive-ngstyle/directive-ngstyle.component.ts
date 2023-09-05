import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.css']
})
export class DirectiveNgstyleComponent {
  ativo: boolean = false;
  tamanhoFonte: number = 10;

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
