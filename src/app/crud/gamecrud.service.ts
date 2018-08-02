import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Game } from 'src/app/models/game';

@Injectable({
  providedIn: 'root'
})
export class GamecrudService {

  private dbPath = 'games';
  gameRef: AngularFireList<Game> = null;
  gameToAdd: Game;

  constructor(private db: AngularFireDatabase) {
    this.gameRef = db.list(this.dbPath)
   }

  createGame(game: Game){
    this.gameRef.push(game);
  }
}
