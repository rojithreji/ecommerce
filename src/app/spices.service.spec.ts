import { TestBed } from '@angular/core/testing';

import { SpicesService } from './spices.service';

describe('SpicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpicesService = TestBed.get(SpicesService);
    expect(service).toBeTruthy();
  });
});
