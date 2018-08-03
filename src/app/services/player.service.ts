import { Injectable } from '@angular/core';
import {Player} from 'src/app/models/player';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private dbpath = 'players';
  // for player list
  playerRef: AngularFireList<Player> = null;
  // for singular player
  itemRef: AngularFireObject<Player>;
  item: Observable<Player>;




  constructor(private db: AngularFireDatabase) {
    this.playerRef = db.list(this.dbpath);
   }

  getAllPlayers(): AngularFireList<Player> {
    this. playerRef = this.db.list(this.dbpath, data => data.orderByChild('name'));
    return this.playerRef;
  }

  getPlayer(path: string): Observable<Player>{
    this.itemRef = this.db.object(path);
    this.item = this.itemRef.valueChanges();
    return this.item;
  }

  createPlayer(player: Player): void {
    this.playerRef.push(player);
  }







}
