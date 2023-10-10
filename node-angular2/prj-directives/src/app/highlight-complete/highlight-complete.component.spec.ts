import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCompleteComponent } from './highlight-complete.component';

describe('HighlightCompleteComponent', () => {
  let component: HighlightCompleteComponent;
  let fixture: ComponentFixture<HighlightCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightCompleteComponent]
    });
    fixture = TestBed.createComponent(HighlightCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
