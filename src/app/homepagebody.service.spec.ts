import { TestBed } from '@angular/core/testing';

import { HomepagebodyService } from './homepagebody.service';

describe('HomepagebodyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepagebodyService = TestBed.get(HomepagebodyService);
    expect(service).toBeTruthy();
  });
});
