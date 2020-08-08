import { TestBed } from '@angular/core/testing';

import { TestArrayService } from './test-array.service';

describe('TestArrayService', () => {
  let service: TestArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
