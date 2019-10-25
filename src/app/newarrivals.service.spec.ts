import { TestBed } from '@angular/core/testing';

import { NewarrivalsService } from './newarrivals.service';

describe('NewarrivalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewarrivalsService = TestBed.get(NewarrivalsService);
    expect(service).toBeTruthy();
  });
});
