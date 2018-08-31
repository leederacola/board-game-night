import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Game } from 'src/app/models/game';

import { DataFriendService } from '../../services/data-friend.service';
import { GameListService } from '../../services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  playerCount: number;
  selectedPlayerId: number;

  constructor(
    private gameService: GameListService,
    private dataService: DataFriendService) {
      this.apiGameList();
     }

    ngOnInit() {
      this.dataService.currentPlayerCount.subscribe(pId => this.selectedPlayerId = pId)
    }

    apiGameList() {
      this.gameService.getAllGames().subscribe(
        results => this.games = results
        );
    }


    // getGamesByPlayerId(playerId: number){
    // }
    // getGamesByEventId(playerId: number){  
    // }



  }