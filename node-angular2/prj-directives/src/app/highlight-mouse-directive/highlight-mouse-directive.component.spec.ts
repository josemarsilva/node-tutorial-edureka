import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMouseDirectiveComponent } from './highlight-mouse-directive.component';

describe('HighlightMouseDirectiveComponent', () => {
  let component: HighlightMouseDirectiveComponent;
  let fixture: ComponentFixture<HighlightMouseDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightMouseDirectiveComponent]
    });
    fixture = TestBed.createComponent(HighlightMouseDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
