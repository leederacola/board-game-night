import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataFriendService {
  
  private playerCountSource = new BehaviorSubject(0);
  currentPlayerCount = this.playerCountSource.asObservable();

  constructor() { }

  changePlayerCount(playerCount: number) {
    this.playerCountSource.next(playerCount)
  }


  
}
