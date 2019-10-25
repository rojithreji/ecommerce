import { TestBed } from '@angular/core/testing';

import { MobileappService } from './mobileapp.service';

describe('MobileappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileappService = TestBed.get(MobileappService);
    expect(service).toBeTruthy();
  });
});
