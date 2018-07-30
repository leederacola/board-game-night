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
    // subscribe to shared dataService for player count 
    this.dataService.currentPlayerCount.subscribe(count => this.playerCount = count);
    this.playerCount = this.attendingPlayers.length;
    
  }

  // get all games from "db"
  //adds some to event games for demo
  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
      //adds some to event games for demo until db save data

      // this breaks input link to detail component because @input game no longer exist in games list
      // this.eventGames = this.games.splice(1,3); 

  }
  removeGame(g: Game){
    let i = this.eventGames.indexOf(g);
    if (i !== -1) {
      this.eventGames.splice(i, 1);
  }
  //this.players.push(g);        
    // this.attendingPlayers.find(player => p === player);

  }
  removePlayer(p: Person){
    let i = this.attendingPlayers.indexOf(p);
    if (i !== -1) {
      this.attendingPlayers.splice(i, 1);
  }
  this.players.push(p); 
  let ct = this.attendingPlayers.length;
  this.dataService.changePlayerCount(ct);       
    // this.attendingPlayers.find(player => p === player);

  }

  getPeople(): void{
    this.personService.getPeople()
      .subscribe(peoples => this.players = peoples.slice(0,6));
  }

  addP(): void {
    let p = this.addPlayer;
    if (!p){
      alert("null addPlayer: use drop down to add player. until i get proper form control");
    }
    else{
      this.attendingPlayers.push(p);
      let ct = this.attendingPlayers.length;
      // use dataService to update playerCount
      this.dataService.changePlayerCount(ct);
      //revove attending from totral player list
    };

  }
  addG(): void {
    if(!this.addGame){
      alert("addGame null: add game with drop down please. until i get proper form control");
    }
    else{
      let g = this.addGame;
      this.eventGames.push(g);
    } 
  }



}
