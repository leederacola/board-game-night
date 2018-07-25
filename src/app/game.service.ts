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
    this.messageService.add("GameService: fetched Games");
    return of (GAMES);
  }

  getGame(id: number): Observable<Game>{
    this.messageService.add('GameService: fetched game id=${id}');
    return of(GAMES.find(game => game.id === id));
  }

// TO DO:
 /***
   * getAllGames()
   * gets all games from your groups List
   */

    /***
   * getPersonsGames(id: number)
   * gets game library from Person.Id
   */

    /***
   * getGameNightgames()
   * gets games of players attending
   * filers games per player count
   */

  

  constructor(private messageService: MessageService) { }
}
