import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Game } from '../models/game';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private dbPath = '/games';
  // gamesRef: AngularFireList<Game> = null;
  // g:Game = new Game();
  // gameList: Game[] = [];
  apiRoot: string = "https://localhost:44323/api/games/";

  constructor(
    // private db: AngularFireDatabase,
    private http: HttpClient
    ) {
    // this.getGamesList();
    this.getAllGames();
    // this.getGameByID();
    //this.gamesRef = db.list(this.dbPath, data => data.orderByChild('title'));
   }

   getAllGames(): Observable<Game[]> {
     console.log("GET: all games called");
     let url = this.apiRoot;
     var result = this.http.get<Game[]>(url);     
     return result;
   }

   getGameById(id : number): Observable<Game> {
    console.log("GET: game by id");
    let url = this.apiRoot;
    var game = this.http.get<Game>(this.apiRoot + id);
    return game;
   }


  // retrieve games that fit with in player count
  getEventGames(playerCt: number){
   //use multiple list? Add them?
  }


 
  private handleError(error) {
    console.log(error);
  }
}

