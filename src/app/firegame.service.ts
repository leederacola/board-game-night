import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Game } from './models/game';

//import  { GAMES } from './models/mock-games'

@Injectable({
  providedIn: 'root'
})
export class FiregameService {

  private dbPath = '/games';

  gamesRef: AngularFireList<Game> = null;
  dynamicGameList: AngularFireList<Game> = null;

  constructor(private db: AngularFireDatabase) {
    this.gamesRef = db.list(this.dbPath);
   }

   createGame(game: Game): void {
    this.gamesRef.push(game);
  }
  updateGame(key: string, value: any): void {
    this.gamesRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteGame(key: string): void {
    this.gamesRef.remove(key).catch(error => this.handleError(error));
  }
 
  getGamesList(): AngularFireList<Game> {
    return this.gamesRef
  }
  getGamesMin(playerCt: number): AngularFireList<Game> {
    this.dynamicGameList = this.db.list(this.dbPath, data => data.orderByChild('minPlayer').startAt(playerCt));
    return this.dynamicGameList;
  }
  getGamesMax(playerCt: number): AngularFireList<Game> {
    this.dynamicGameList = this.db.list(this.dbPath, data => data.orderByChild('maxPlayer').startAt(playerCt));
    return this.dynamicGameList;
  }



  getGamesByTitle(title: string){
    this.dynamicGameList = this.db.list(this.dbPath, data=> data.orderByChild('title').equalTo(title));
  }
 

    /***
     *  
     */
 
  private handleError(error) {
    console.log(error);
  }
}
