import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/game.service';
import { DataFriendService } from '../data-friend.service';
import { FiregameService } from '../firegame.service';

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
  listToggle: boolean = false;

  fireGamesList: Game[] = [];

    // game service is injected into the dashboard component and can be used
    constructor(
      private gameService: GameService,
      private fireGameService: FiregameService,
      private dataService: DataFriendService) { }
  
    ngOnInit() {
      this.getGamesList();
      // this.gameService.getGames()
      //   .subscribe(games => this.games = games);  

      this.dataService.currentPlayerCount.subscribe(ct => this.playerCount = ct);
    }
    


  // used gameService to set component games[]
  getGames(): void {
    //this.gameService.getGames().subscribe(games => this.games = games);
      // names result of subscrition games and assigns to this.games property
      
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
 

  toggleGameList(){
    this.listToggle = !this.listToggle;
  }






}
