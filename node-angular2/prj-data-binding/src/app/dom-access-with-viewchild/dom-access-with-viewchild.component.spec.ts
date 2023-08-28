import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAccessWithViewchildComponent } from './dom-access-with-viewchild.component';

describe('DomAccessWithViewchildComponent', () => {
  let component: DomAccessWithViewchildComponent;
  let fixture: ComponentFixture<DomAccessWithViewchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomAccessWithViewchildComponent]
    });
    fixture = TestBed.createComponent(DomAccessWithViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
