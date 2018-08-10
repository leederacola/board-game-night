import { Component, OnInit, Input } from '@angular/core';
// routing
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
// my inports

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';


import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})


export class GameDetailComponent implements OnInit {


  @Input() game: Game;
  item: Observable<Game>; // retrieved 'item from db'

  constructor(
    private route: ActivatedRoute,
    private location: Location,

    private gameService: GameListService
  ) { }

  getGameById() {
    // get param and path
    this.route.paramMap.subscribe((params: ParamMap) => {
      // convert to number
      let id =+ (params.get("id"));
      this.gameService.getGameById(id).subscribe(
        result => this.game = result
      );
    });
  }

  ngOnInit() {
    this.getGameById();
  }
}



