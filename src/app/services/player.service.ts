import { Injectable } from '@angular/core';
import {Player} from 'src/app/models/player';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private dbpath = 'players';
  playerRef: AngularFireList<Player> = null;
  playerToAdd: Player;

  constructor(private db: AngularFireDatabase) { }

  getAllPlayers(): AngularFireList<Player> {
    this. playerRef = this.db.list(this.dbpath, data => data.orderByChild('name'));
    return this.playerRef;
  }

  createPlayer(player: Player): void {
    this.playerRef.push(player);
  }







}
