import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/game.service';
import { DataFriendService } from '../data-friend.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})


export class GamesComponent implements OnInit {

  games: Game[];
  //selectedGame: Game;
  playerCount: number;

  // used gameService to set component games[]
  getGames(): void {
    this.gameService.getGames()
      // names result of subscrition games and assigns to this.games property
      .subscribe(games => this.games = games);
  }
changePlayerCount(){
  this.dataService.changePlayerCount(15);
}



  // game service is injected into the dashboard component and can be used
  constructor(
    private gameService: GameService,
    private dataService: DataFriendService) { }

  ngOnInit() {
    this.gameService.getGames()
      .subscribe(games => this.games = games);

    this.dataService.currentPlayerCount.subscribe(ct => this.playerCount = ct);
  }

}
