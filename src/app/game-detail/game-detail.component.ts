import { Component, OnInit, Input } from '@angular/core';
// routing

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
// my inports
import { GameService } from 'src/app/game.service'
import { Game } from 'src/app/models/game';
import { Person } from 'src/app/models/person';



@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  idFromRoute: number;
  @Input() game: Game;
  

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getGame();
  }

  /***
 * getGames() subscribes to paramMap(obserable) -> get 'id' from ulr/route
 * then calls gameService getGame() with new id from paramMap
 */
  getGame(): void {
    //get new id
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.idFromRoute = id;
      //call gaemService
      this.gameService.getGame(this.idFromRoute)
        .subscribe(game => this.game = game);
    });
  }

  // this works only if component will not be rerouted to!!!!!! 
  // getGame(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.gameService.getGame(id)
  //     .subscribe(game => this.game = game);
  // }

  goBack(): void {
    this.location.back();
  }



}
