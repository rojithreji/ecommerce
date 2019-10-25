import { TestBed } from '@angular/core/testing';

import { OrganicfruitsService } from './organicfruits.service';

describe('OrganicfruitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganicfruitsService = TestBed.get(OrganicfruitsService);
    expect(service).toBeTruthy();
  });
});
