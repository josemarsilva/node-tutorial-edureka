import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dom-access-with-viewchild',
  templateUrl: './dom-access-with-viewchild.component.html',
  styleUrls: ['./dom-access-with-viewchild.component.css']
})
export class DomAccessWithViewchildComponent {
  @Input() valor:number = 0;
  @ViewChild('campoInput') campoValorInput!: ElementRef;

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
    console.log(this.campoValorInput.nativeElement);
  }

}
