import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  itemRef: AngularFireObject<Game>;
  item: Observable<Game>;
  game: Game = new Game();
  constructor(db: AngularFireDatabase) {
    // find in db
    this.itemRef = db.object('/games/-LIgMgN7omCxJ8z9VBfm');
    // set item to obserable
    this.item = this.itemRef.valueChanges();
    // subscribe to obserable set to Game
    this.item.subscribe(g => this.game = g);

  }



  ngOnInit() {
  }

}


