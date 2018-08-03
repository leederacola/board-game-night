import { Component, OnInit } from '@angular/core';

import { Player } from 'src/app/models/player';
import { Event } from 'src/app/models/event';
import { Game } from 'src/app/models/game';
import { EventserviceService } from '../../services/eventservice.service';
import { map } from '../../../../node_modules/rxjs/operators';


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


  constructor(private eventService: EventserviceService) {
    this.getEventList();
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

  selectEvent(){

  }

  

  ngOnInit() {
  }
}
