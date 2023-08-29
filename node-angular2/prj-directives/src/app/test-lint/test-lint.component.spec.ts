import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLintComponent } from './test-lint.component';

describe('TestLintComponent', () => {
  let component: TestLintComponent;
  let fixture: ComponentFixture<TestLintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLintComponent]
    });
    fixture = TestBed.createComponent(TestLintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
