import { TestBed } from '@angular/core/testing';

import { TestMakerService } from './test-maker.service';

describe('TestMakerService', () => {
  let service: TestMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
