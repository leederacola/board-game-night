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

import { GameDetailService} from 'src/app/services/game-detail.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})


export class GameDetailComponent implements OnInit {

  
  @Input() game: Game;
  path: string;
  key: string;
  itemRef: AngularFireObject<Game>; //db ref to 'item
  item: Observable<Game>; // retrieved 'item from db'
 
  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private detailService: GameDetailService,
  ) {}

    /***GetGame()
      * subscribes to url param changes
      * uses url key to call game-detail service getGame()
      * getGame() returns obserable game
      * subscribes to returned obserable<Game>
      */
   getGame(){
    //get param and path
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.path = '/games/' + (params.get('key'));
      // call getGame, subscribe
       this.item =  this.detailService.getGame(this.path);
       this.item.subscribe( g => this.game = g);
    });
   }

  ngOnInit() {
   this.getGame();
  }


  }


