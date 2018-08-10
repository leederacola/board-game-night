import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Game } from 'src/app/models/game';

import { DataFriendService } from '../data-friend.service';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})


export class GamesComponent implements OnInit {

  games: Game[] = [];
  playerCount: number;
  


    // game service is injected into the dashboard component and can be used
    constructor(

      private gameService: GameListService,
      private dataService: DataFriendService) { }
  
    ngOnInit() {
      this.apiGameList();
      this.dataService.currentPlayerCount.subscribe(ct => this.playerCount = ct);
    }
    
    apiGameList() {
      this.gameService.getAllGames().subscribe(
        //results => console.log(results)
        results => this.games = results
        );
    }
    








}
