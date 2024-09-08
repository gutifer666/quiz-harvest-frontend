import { TestBed } from '@angular/core/testing';

import { FetchTestRepositoryService } from './fetch-test-repository.service';

describe('FetchTestRepositoryService', () => {
  let service: FetchTestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
