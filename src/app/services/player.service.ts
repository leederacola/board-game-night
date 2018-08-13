import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {  
  apiRoot: string = "https://localhost:44323/api/players/";

  constructor(private http: HttpClient) {
    this.getAllPlayers();
   }

  getAllPlayers(): Observable<Player[]> {
    console.log("GET: all games called");
    let url = this.apiRoot;
    var result = this.http.get<Player[]>(url);
    return result;
  }









}
