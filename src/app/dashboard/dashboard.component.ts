import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/game.service';
import { Person } from 'src/app/models/person';
import { PersonService } from '../person.service';
import {DataFriendService } from '../data-friend.service'

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

playerCount: number;

  constructor(
    private gameService: GameService,
    private personService: PersonService,
    private dataService: DataFriendService,
  ) { }

  ngOnInit() {
    this.getGames();
    this.getPeople();  
    this.dataService.currentPlayerCount.subscribe(count => this.playerCount = count);
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
    let ct = this.attendingPlayers.length;
    // use dataService to update playerCount
    this.dataService.changePlayerCount(ct);
    //revove attending from totral player list
  }
  addG(): void {
    let g = this.addGame;
    this.eventGames.push(g);
    
  }



}
