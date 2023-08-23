import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url:string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage:string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'; // 'http://lorempixel.com/400/200/nature/'

  getValor() { 
    return 1
  }

}
