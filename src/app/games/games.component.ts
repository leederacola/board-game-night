import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/game.service';
import { DataFriendService } from '../data-friend.service';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})


export class GamesComponent implements OnInit {

  games: Game[] = [];
  filteredGames: Game[] = []
  //selectedGame: Game;
  playerCount: number;
  

  fireGamesList: Game[] = [];

    // game service is injected into the dashboard component and can be used
    constructor(
      private gameService: GameService,
      private fireGameService: GameListService,
      private dataService: DataFriendService) { }
  
    ngOnInit() {
      this.getGamesList();
      this.dataService.currentPlayerCount.subscribe(ct => this.playerCount = ct);
    }
    


  getGamesList() {
    // Use snapshotChanges().map() to store the key
    this.fireGameService.getGamesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(games => {
      this.fireGamesList = games;
    });


  }
 

  gamesByCtMin(){
    this.fireGameService.getGamesMin(this.playerCount).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(games => {
      this.fireGamesList = games;
    });
  }

  gamesByCtMax(){
    this.fireGameService.getGamesMax(this.playerCount).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(games => {
      this.fireGamesList = games;
    });
  }






}
