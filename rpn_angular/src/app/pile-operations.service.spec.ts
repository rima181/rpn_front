import { TestBed } from '@angular/core/testing';

import { PileOperationsService } from './pile-operations.service';

describe('PileOperationsService', () => {
  let service: PileOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PileOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
