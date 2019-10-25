import { TestBed } from '@angular/core/testing';

import { ExoticService } from './exotic.service';

describe('EcoticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcoticService = TestBed.get(EcoticService);
    expect(service).toBeTruthy();
  });
});
