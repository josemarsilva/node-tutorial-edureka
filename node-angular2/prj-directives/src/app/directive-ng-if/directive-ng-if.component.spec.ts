import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgIfComponent } from './directive-ng-if.component';

describe('DirectiveNgIfComponent', () => {
  let component: DirectiveNgIfComponent;
  let fixture: ComponentFixture<DirectiveNgIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveNgIfComponent]
    });
    fixture = TestBed.createComponent(DirectiveNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
