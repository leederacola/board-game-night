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
  selectedplayerId: number;

  
  constructor(
    private playerService: PlayerService,
    private dataService: DataFriendService)
     { 
      this.GetPlayerList();
      
     }

  ngOnInit() {
    this.dataService.currentPlayerCount.subscribe(pId => this.selectedplayerId = pId)
  }


  updateSharedPlayerId(){
    console.log("shared player Id updated!");
    this.selectedplayerId = this.selectedPlayer.playerId;
    this.dataService.setSelectedPlayerId(this.selectedplayerId);
  }

  GetPlayerList() {
    this.playerService.getAllPlayers().subscribe(
      result => this.players = result   
    )
  };


}
