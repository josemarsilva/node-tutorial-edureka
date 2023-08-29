import { TestBed } from '@angular/core/testing';

import { DirectiveNgIfService } from './directive-ng-if.service';

describe('DirectiveNgIfService', () => {
  let service: DirectiveNgIfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectiveNgIfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
