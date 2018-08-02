import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamecrudService } from 'src/app/crud/gamecrud.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gamecrud',
  templateUrl: './gamecrud.component.html',
  styleUrls: ['./gamecrud.component.css']
})
export class GamecrudComponent implements OnInit {

  game:Game;



  constructor(private gameCrudService: GamecrudService) { }

  ngOnInit() {
  }

  createGame(): void {
    let g = this.game;
    this.gameCrudService.createGame(g);
  }

}
