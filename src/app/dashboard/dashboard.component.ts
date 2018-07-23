import { Component, OnInit } from '@angular/core';

import { GAMES} from 'src/app/models/mock-games';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  games: Game[];
  selectedGame: Game;

  // used gameService to set component games[]
  getGames(): void {
    this.gameService.getGames()
      // names result of subscrition games and assigns to this.games property
      .subscribe(games => this.games = games);
  }

  // <li> html selected assigined to component selectedGame
  onSelectedGame(game:Game): void{
    this.selectedGame = game;
  }

  // game service is injected into the dashboard component and can be used
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();// on creation getGames is called, populating component games[]
  }

}
