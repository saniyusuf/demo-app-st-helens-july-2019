import { TestBed } from '@angular/core/testing';

import { SitesDataService } from './sites-data.service';

describe('SitesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SitesDataService = TestBed.get(SitesDataService);
    expect(service).toBeTruthy();
  });
});
