import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Game } from '../models/game';
import { FiregameService } from '../firegame.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-firegamecreate',
  templateUrl: './firegamecreate.component.html',
  styleUrls: ['./firegamecreate.component.css']
})
export class FiregamecreateComponent implements OnInit {

  games: Game[] = [];
  game: Game = new Game();
  submitted = false;



  constructor(
    private fireService: FiregameService,
    private gameService: GameService
  ) { }

  ngOnInit() {
  } 


  getGames(): void {
    this.gameService.getGames()
      // names result of subscrition games and assigns to this.games property
      .subscribe(games => this.games = games);
  }


  
  newGame(): void {
    this.submitted = false;
    this.game = new Game();
  }
 
  save() {
    this.gameService.getGame(14).subscribe(game => this.game = game);
    
    this.fireService.createGame(this.game);
    this.game = new Game();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}