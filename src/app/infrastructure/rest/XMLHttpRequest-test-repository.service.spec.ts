import { TestBed } from '@angular/core/testing';

import { XMLHttpRequestTestRepositoryService } from './XMLHttpRequest-test-repository.service';

describe('XMLHttpRequestTestRepositoryService', () => {
  let service: XMLHttpRequestTestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XMLHttpRequestTestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
