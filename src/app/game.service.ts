import { Injectable } from '@angular/core';

import { Game } from 'src/app/models/game';
import { GAMES } from 'src/app/models/mock-games';


@Injectable({
  // this service is provided at root level, 
  // a shared instance is created and made availavle to any class that needs it
  providedIn: 'root'
})
export class GameService {

  //returns array of mock-games GAMES
  getGames(): Game[] {
    return GAMES;
  }

  constructor() { }
}
