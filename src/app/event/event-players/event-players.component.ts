import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from '../../services/player.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-event-players',
  templateUrl: './event-players.component.html',
  styleUrls: ['./event-players.component.css']
})
export class EventPlayersComponent implements OnInit {

  player: Player = new Player();
  allPlayers: Player[] = [];
  eventPlayers: Player[] = [];

  constructor(private playerService: PlayerService) { 

  }

  ngOnInit() {
    this.getAllPlayers();
  }


  createPlayer(): void {
    let p = this.player;
    this.playerService.createPlayer(p);
    this.player = new Player();
  }
  
  getAllPlayers() {
    // Use snapshotChanges().map() to store the key
    this.playerService.getAllPlayers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(players => {
      this.allPlayers = players;
    });
  }



}