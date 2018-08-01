import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Game } from './models/game';

//import  { GAMES } from './models/mock-games'

@Injectable({
  providedIn: 'root'
})
export class FiregameService {

  private dbPath = '/games';

  gamesRef: AngularFireList<Game> = null;
  dynamicGameList: AngularFireList<Game> = null;
  gameDetail: AngularFireList<Game>=null;
  g:Game = new Game();

  constructor(private db: AngularFireDatabase) {
    this.gamesRef = db.list(this.dbPath);
   }



  // getGame(key: string): AngularFireList<Game>{
  //   // console.log("service key = " + key);
  //   // this.gameDetail =  this.db.object('games/${key}').subscribe()
  //   // return this.gameDetail[0];

  // }

  getGamesList(): AngularFireList<Game> {
    return this.gamesRef;
  }

  getGamesMin(playerCt: number): AngularFireList<Game> {
    this.dynamicGameList = this.db.list(this.dbPath, data => data.orderByChild('minPlayer').startAt(playerCt));
    return this.dynamicGameList;
  }
  
  getGamesMax(playerCt: number): AngularFireList<Game> {
    this.dynamicGameList = this.db.list(this.dbPath, data => data.orderByChild('maxPlayer').startAt(playerCt));
    return this.dynamicGameList;
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
  getGamesByTitle(title: string) {
    this.dynamicGameList = this.db.list(this.dbPath, data => data.orderByChild('title').equalTo(title));
  } 
 

 
  private handleError(error) {
    console.log(error);
  }
}
