import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Player } from 'src/app/models/player';
import { Event } from 'src/app/models/event';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {


  // single event
  // eventref: AngularFireObject<Event>;
  // eventItem: Observable<Event>;
  // newEvent: Event = new Event();
  private dbPath = 'events'
  eventRef: AngularFireList<Event> = null;

  
  constructor(private db: AngularFireDatabase) {
    this.eventRef = db.list(this.dbPath);
   }

   // gets all events in db by date
   getEventList(): AngularFireList<Event> {
     this.eventRef = this.db.list('events', data => data.orderByChild('date'));
     return this.eventRef;
   }

  //  getEvent(path: string): Observable<Event> {
  //    this.eventref = this.db.object(path);
  //    this.eventItem = this.eventref.valueChanges();
  //    return this.eventItem;
  //  }

   createEvent(e: Event): void {
     this.eventRef.push(e);
   }


}
