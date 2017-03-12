import { TestBed, inject } from '@angular/core/testing';

import { PunLookupService } from './pun-lookup.service';

describe('PunLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PunLookupService]
    });
  });

  it('should ...', inject([PunLookupService], (service: PunLookupService) => {
    expect(service).toBeTruthy();
  }));
});
