import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';
import { DataFriendService } from '../../services/data-friend.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [];
  selectedPlayer: Player;

  
  constructor(
    private playerService: PlayerService,
    private dataService: DataFriendService)
     { }

  ngOnInit() {
    this.GetPlayerList();

  }

  GetPlayerList() {
    this.playerService.getAllPlayers().subscribe(
      result => this.players = result
    )};


}
