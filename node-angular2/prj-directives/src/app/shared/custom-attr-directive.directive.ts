import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomAttrDirective]'
})
export class CustomAttrDirectiveDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { 
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.backgroundColor = 'yellow'; // DO NOT USE ElementRef - security issue XXS atach
    this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'background-color',
      'yellow');
  }

}
