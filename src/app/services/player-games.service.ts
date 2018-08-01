import { Injectable } from '@angular/core';
import {Player} from 'src/app/models/player';
import { Game } from 'src/app/models/game';
import { PlayerGame } from 'src/app/models/playerGame';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PlayerGamesService {

  private dbpath = 'playerGames';
  playerRef: AngularFireList<Player> = null;
  playerToAdd: Player;

  constructor(private db: AngularFireDatabase) {
    this.playerRef = db.list(this.dbpath);
   }

  getAllPlayers(): AngularFireList<Player> {
    this. playerRef = this.db.list(this.dbpath, data => data.orderByChild('name'));
    return this.playerRef;
  }

  createPlayer(player: Player): void {
    this.playerRef.push(player);
  }
}
