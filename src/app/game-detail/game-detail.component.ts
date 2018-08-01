import { Component, OnInit, Input } from '@angular/core';
// routing
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
// my inports
import { Person } from 'src/app/models/person';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})


export class GameDetailComponent implements OnInit {

  
  @Input() game: Game;
  path: string;
  key: string
  itemRef: AngularFireObject<Game>; //db ref to 'item
  item: Observable<Game>; // retrieved 'item from db'
  //db: AngularFireDatabase;
  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    db: AngularFireDatabase
  ) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.key = (params.get('key'));
      this.path = '/games/' + this.key;
      console.log("path: " + this.path);
    });

      this.itemRef = db.object(this.path);
      // set item to obserable
      this.item = this.itemRef.valueChanges();
      // subscribe to obserable set to Game
      this.item.subscribe(g => this.game = g);
   }

  ngOnInit() {
   // this.getGame();
  }


  // getGame(): void {
  //   //get key from route param
  //   this.route.paramMap.subscribe((params: ParamMap) => {
  //     let key = (params.get('key'));
  //     this.routeKey = key;

  //     let path = '/games/' + key;
  //     console.log("path: " + path );
  //     this.itemRef = this.db.object(path);
  //     // set item to obserable
  //     this.item = this.itemRef.valueChanges();
  //     // subscribe to obserable set to Game
  //     this.item.subscribe(g => this.game = g);
  
  //   });

  }


