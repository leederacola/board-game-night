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
 
/*** FUTURE
 * groupGames: Game[] = []; - all games in db (game night group all games)
 * selectedPlayerGames: Game[] = []; - view specific user library
 * gameNightFilteredGames: Game[] = []; - filtered players attending libraries and player counts
 * 
 * allPlayers: Person[];
 * eventPeople: Person[];
*/
games: Game[] = [];
eventGames: Game[] = [];
addGame;
players: Person[] =[]
attendingPlayers: Person[] =[]
addPlayer;

  constructor(
    private gameService: GameService,
    private personService: PersonService,
  ) { }

  ngOnInit() {
    this.getGames();
    this.getPeople();  
  }

  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }

  getPeople(): void{
    this.personService.getPeople()
      .subscribe(peoples => this.players = peoples.slice(0,6));
  }

  addP(): void {
    let p = this.addPlayer;
    this.attendingPlayers.push(p);
    //revove attending from totral player list
  }
  addG(): void {
    let g = this.addGame;
    this.eventGames.push(g);
    
  }



}
