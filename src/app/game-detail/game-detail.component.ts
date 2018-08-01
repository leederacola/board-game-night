import { Component, OnInit, Input } from '@angular/core';
// routing
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
// my inports
import { GameService } from 'src/app/game.service'
import { Game } from 'src/app/models/game';
import { Person } from 'src/app/models/person';
import { FiregameService } from '../firegame.service';



@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  routeKey: string;
  @Input() game: Game;
  games: Game[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private fireGameService: FiregameService,
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
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let key = (params.get('key'));
      key = key.slice(1,key.length);
      this.routeKey = key;

      // this.fireGameService.getGame(key).snapshotChanges().pipe(
      //   map(changes =>
      //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      //   )
      // ).subscribe(games => {
      //   this.games = games;
      // });
      // this.game = this.games[0];
      // console.log(this.game.key);
      // this.firegameService.getGame(this.routeKey).snapshotChanges().subscribe(game => this.games = game);
      // //get new id
      // //call gaemService
      // this.gameService.getGame(this.idFromRoute)
      //   .subscribe(game => this.game = game);
    });
  }

  // this works only if component will not be rerouted to!!!!!! 
  // getGame(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.gameService.getGame(id)
  //     .subscribe(game => this.game = game);
  // }





}
