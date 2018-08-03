import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDetailService {

  itemRef: AngularFireObject<Game>;
  item: Observable<Game>;
  game: Game = new Game();


  constructor(private db: AngularFireDatabase) {
    // find in db
  }

  getGame(path: string): Observable<Game>{
    console.log("inside detail service");
    this.itemRef = this.db.object(path);
    // set item to obserable
    this.item = this.itemRef.valueChanges();
    // subscribe to obserable set to Game
    console.log("end detail service");
    return this.item;
    
  }
}