import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouseDirective]'
})
export class HighlightMouseDirectiveDirective {

  @HostListener('mouseenter') onMouseEnter(){
    console.log('onMouseEnter()');
    // this._renderer.setStyle(this._elementRef, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('onMouseLeave()');
    // this._renderer.setStyle(this._elementRef, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'black';
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string = '';

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
    ) { }

}
