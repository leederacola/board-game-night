import { TestBed, inject } from '@angular/core/testing';

import { FiregameService } from './firegame.service';

describe('FiregameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiregameService]
    });
  });

  it('should be created', inject([FiregameService], (service: FiregameService) => {
    expect(service).toBeTruthy();
  }));
});
