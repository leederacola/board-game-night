import { Component, OnInit } from '@angular/core';

import { Player } from 'src/app/models/player';
import { Event } from 'src/app/models/event';
import { Game } from 'src/app/models/game';
import { EventserviceService } from '../../services/eventservice.service';
import { map } from '../../../../node_modules/rxjs/operators';
import { PlayerService } from '../../services/player.service';


@Component({
  selector: 'app-event-main',
  templateUrl: './event-main.component.html',
  styleUrls: ['./event-main.component.css']
})
export class EventMainComponent implements OnInit {

  eventList: Event [] = [];
  newEvent: Event = new Event();
  player: Player;
  playerList: Player[] = [];
  gameList: Game [] = [];
  selectedEvent: Event;
keys: any;

  constructor(
    private eventService: EventserviceService,
    playerService: PlayerService,
  ) {
    this.getEventList();
    this.getPlayerKeysFromEvent();
  }

  createEventKey(){
    let e = this.newEvent;
    this.eventService.createEvent(e);
    this.newEvent = new Event();
  }

  getEventList() {
    // Use snapshotChanges().map() to store the key
    this.eventService.getEventList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(events => {
      this.eventList = events;
    });
  };

  getPlayerKeysFromEvent(){
    this.eventService.getPlayersFromEvent().snapshotChanges().pipe(
      map(changes =>
      changes.map(c =>({ key: c.payload.key }))
    )
  ).subscribe(player => {
    this.keys = player;
  });
 
  }


  selectEvent(){}

  

  ngOnInit() {
  }
}