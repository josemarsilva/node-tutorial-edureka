import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttrDirectiveComponent } from './custom-attr-directive.component';

describe('CustomAttrDirectiveComponent', () => {
  let component: CustomAttrDirectiveComponent;
  let fixture: ComponentFixture<CustomAttrDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAttrDirectiveComponent]
    });
    fixture = TestBed.createComponent(CustomAttrDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
