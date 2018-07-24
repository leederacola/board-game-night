import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/game.service';
import { Person } from 'src/app/models/person';
import { PersonService } from '../person.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

games: Game[] = [];
// remove from component with service
players: Person[] =[]


  constructor(
    private gameService: GameService,
    private personService: PersonService
  ) { }

  getGames(): void{
    this.gameService.getGames()
      .subscribe(games => this.games = games.slice(0,6));
  }
  getPeople(): void{
    this.personService.getPeople()
      .subscribe(peoples => this.players = peoples.slice(0,6));
  }


  ngOnInit() {
    this.getGames();
    this.getPeople();
    
  }

}
