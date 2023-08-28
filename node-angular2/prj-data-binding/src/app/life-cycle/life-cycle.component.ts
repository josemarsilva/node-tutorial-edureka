import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {

  @Input() valorInicial: number = 10;

  constructor(){
    this.log('constructor()');
  }

  ngOnInit() {
    this.log('ngOnInit()');
  }

  ngOnChanges(){
    this.log('ngOnChanges()');
  }
  
  ngDoCheck(){
    this.log('ngDoCheck()');
  }
  
  ngAfterContentInit(){
    this.log('ngAfterContentInit()');
  }
  
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked()');
  }
  
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked()');
  }
  
  ngOnDestroy(){
    this.log('ngOnDestroy()');
  }

  private log(hook: string) {
    console.log(hook);
  }


}
