import { TestBed, inject } from '@angular/core/testing';

import { PlayerGamesService } from './player-games.service';

describe('PlayerGamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerGamesService]
    });
  });

  it('should be created', inject([PlayerGamesService], (service: PlayerGamesService) => {
    expect(service).toBeTruthy();
  }));
});
