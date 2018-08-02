import { TestBed, inject } from '@angular/core/testing';

import { GamecrudService } from './gamecrud.service';

describe('GamecrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamecrudService]
    });
  });

  it('should be created', inject([GamecrudService], (service: GamecrudService) => {
    expect(service).toBeTruthy();
  }));
});
