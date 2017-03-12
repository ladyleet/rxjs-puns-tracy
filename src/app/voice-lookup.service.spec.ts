import { TestBed, inject } from '@angular/core/testing';

import { VoiceLookupService } from './voice-lookup.service';

describe('VoiceLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoiceLookupService]
    });
  });

  it('should ...', inject([VoiceLookupService], (service: VoiceLookupService) => {
    expect(service).toBeTruthy();
  }));
});
