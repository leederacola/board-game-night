import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

games: Game[] = [];

  constructor(private gameService: GameService) { }

  getGames(): void{
    this.gameService.getGames()
      .subscribe(games => this.games = games.slice(1,5));
  }


  ngOnInit() {
    this.getGames();
  }

}
