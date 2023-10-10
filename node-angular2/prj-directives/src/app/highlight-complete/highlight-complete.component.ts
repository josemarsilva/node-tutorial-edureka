import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-highlight-complete',
  templateUrl: './highlight-complete.component.html',
  styleUrls: ['./highlight-complete.component.css']
})
export class HighlightCompleteComponent {
  private backgroundColor: string = '';
  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  @HostListener('mouseenter') onMouseEnter(){
    console.log('onMouseEnter()');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('onMouseLeave()');
    this.backgroundColor = this.highlightColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    console.log('@HostBinding(style.backgroundColor)');
    return this.backgroundColor;
  }

  ngOnInit() {
    console.log('ngOnInit()');
    this.backgroundColor = this.defaultColor;
  }

}
