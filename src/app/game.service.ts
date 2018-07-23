import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from 'src/app/models/game';
import { GAMES } from 'src/app/models/mock-games';

import { MessageService } from './message.service';

@Injectable({
  // this service is provided at root level, 
  // a shared instance is created and made availavle to any class that needs it
  providedIn: 'root'
})
export class GameService {

  //returns array of mock-games GAMES
  getGames(): Observable<Game[]> {
    this.messangeService.add("GameService: fetched Games");
    return of (GAMES);
  }

  constructor(private messangeService: MessageService) { }
}
