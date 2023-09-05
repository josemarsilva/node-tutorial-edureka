import { Component } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent {

  tarefa: any = {
    descricao: 'Descrição da tarefa',
    responsavel: null
  }

}
