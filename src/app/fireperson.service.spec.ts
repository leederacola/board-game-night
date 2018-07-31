import { TestBed, inject } from '@angular/core/testing';

import { FirepersonService } from './fireperson.service';

describe('FirepersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirepersonService]
    });
  });

  it('should be created', inject([FirepersonService], (service: FirepersonService) => {
    expect(service).toBeTruthy();
  }));
});
