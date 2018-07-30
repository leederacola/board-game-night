import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class FiregameService {

  private dbPath = '/games';

  gamesRef: AngularFireList<Game> = null;

  constructor(private db: AngularFireDatabase) {
    this.gamesRef = db.list(this.dbPath);
   }

   createGame(game: Game): void {
    this.gamesRef.push(game);
  }
 
  // updateGame(key: string, value: any): void {
  //   this.gamesRef.update(key, value).catch(error => this.handleError(error));
  // }
 
  // deleteGame(key: string): void {
  //   this.gamesRef.remove(key).catch(error => this.handleError(error));
  // }
 
  getCustomersList(): AngularFireList<Game> {
    return this.gamesRef;
  }
 
  // deleteAll(): void {
  //   this.gamesRef.remove().catch(error => this.handleError(error));
  // }
 
  private handleError(error) {
    console.log(error);
  }
}
