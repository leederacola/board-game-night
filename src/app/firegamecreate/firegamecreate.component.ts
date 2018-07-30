import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Game } from '../models/game';
import { FiregameService } from '../firegame.service';

@Component({
  selector: 'app-firegamecreate',
  templateUrl: './firegamecreate.component.html',
  styleUrls: ['./firegamecreate.component.css']
})
export class FiregamecreateComponent implements OnInit {

  game: Game = new Game();
  submitted = false;



  constructor(private fireService: FiregameService) { }

  ngOnInit() {
  } 
  
  newGame(): void {
    this.submitted = false;
    this.game = new Game();
  }
 
  save() {
    this.fireService.createGame(this.game);
    this.game = new Game();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}