import { Injectable } from '@angular/core';
import { GameNight } from '../models/GameNight';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private dbPath = "/events";
  apiRoot: string = "http://localhost:33031/api/events/";

  constructor(
    private http: HttpClient
  ) { }


  GetAllEvents(): Observable<GameNight[]> {
    var result = this.http.get<GameNight[]>(this.apiRoot);
    return result;
  }

  GetEventById(id: number): Observable<GameNight> {
    let url = this.apiRoot + id
    var result = this.http.get<GameNight>(url);
    return result;
  }
}

