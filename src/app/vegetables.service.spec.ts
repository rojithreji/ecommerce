import { TestBed } from '@angular/core/testing';

import { FruitsService } from './vegetables.service';

describe('FruitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitsService = TestBed.get(FruitsService);
    expect(service).toBeTruthy();
  });
});
