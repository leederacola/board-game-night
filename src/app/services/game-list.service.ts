import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private dbPath = '/games';

  gamesRef: AngularFireList<Game> = null;
  gamesRef2: AngularFireList<Game> = null;
  gameDetail: AngularFireList<Game>=null;
  g:Game = new Game();

  constructor(private db: AngularFireDatabase) {
    this.getGamesList();
    //this.gamesRef = db.list(this.dbPath, data => data.orderByChild('title'));
   }

  getGamesList(): AngularFireList<Game> {
    this.gamesRef =this.db.list(this.dbPath, data => data.orderByChild('title'));
    return this.gamesRef;
  }
  // oder all game by min player count 
  getGamesMin(playerCt: number): AngularFireList<Game> {
    this.gamesRef = this.db.list(this.dbPath, data => data.orderByChild('minPlayer').startAt(playerCt));
    return this.gamesRef;
  }
  // oder all game by max player count 
  getGamesMax(playerCt: number): AngularFireList<Game> {
    this.gamesRef = this.db.list(this.dbPath, data => data.orderByChild('maxPlayer').startAt(playerCt));
    return this.gamesRef;
  }

  // retrieve games that fit with in player count
  getEventGames(playerCt: number){
   //use multiple list? Add them?
  }


 createGame(game: Game): void {
    this.gamesRef.push(game);
  }
  deleteGame(key: string): void {
    this.gamesRef.remove(key).catch(error => this.handleError(error));
  }
  updateGame(key: string, value: any): void {
    this.gamesRef.update(key, value).catch(error => this.handleError(error));
  }
  // getGamesByTitle(title: string) {
  //   this.gamesRef = this.db.list(this.dbPath, data => data.orderByChild('title').equalTo(title));
  // } 
 

 
  private handleError(error) {
    console.log(error);
  }
}

