import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngswitch',
  templateUrl: './directive-ngswitch.component.html',
  styleUrls: ['./directive-ngswitch.component.css']
})
export class DirectiveNgswitchComponent {
  aba: string = 'home'; // ['home', 'features', 'pricing']

}
