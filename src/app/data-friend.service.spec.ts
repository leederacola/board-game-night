import { TestBed, inject } from '@angular/core/testing';

import { DataFriendService } from './data-friend.service';

describe('DataFriendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFriendService]
    });
  });

  it('should be created', inject([DataFriendService], (service: DataFriendService) => {
    expect(service).toBeTruthy();
  }));
});
