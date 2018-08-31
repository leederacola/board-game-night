import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataFriendService {
  
  private playerCountSource = new BehaviorSubject(null);
  currentPlayerCount = this.playerCountSource.asObservable();

  constructor() { }


  setSelectedPlayerId(playerId: number) {
    this.playerCountSource.next(playerId)
  }


  
}
