import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent {

  @Input() nomeDataBinding: string = '';
  @Input('aliasDataBinding2') nomeDataBinding2: string = '';

}
