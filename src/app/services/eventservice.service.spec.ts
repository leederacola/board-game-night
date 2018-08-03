import { TestBed, inject } from '@angular/core/testing';

import { EventserviceService } from './eventservice.service';

describe('EventserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventserviceService]
    });
  });

  it('should be created', inject([EventserviceService], (service: EventserviceService) => {
    expect(service).toBeTruthy();
  }));
});
