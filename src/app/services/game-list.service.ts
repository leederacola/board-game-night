import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Game } from '../models/game';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private dbPath = '/games';

  apiRoot: string = "https://localhost:44323/api/games/";

  constructor(
    private http: HttpClient
    ) {}

   getAllGames(): Observable<Game[]> {
     // Get: api/games/
     let url = this.apiRoot;
     var result = this.http.get<Game[]>(url);     
     return result;
   }

   getGameById(id : number): Observable<Game> {
     // Get: api/games/id
    var game = this.http.get<Game>(this.apiRoot + id);
    return game;
   }

   getPlayerGames(playerId: number): Observable<Game[]> {
    // Get: api/games/player/playerId
    let api = (this.apiRoot + 'player/' + playerId);
    var result = this.http.get<Game[]>(api);
    return result;
   }




 
  private handleError(error) {
    console.log(error);
  }
}

