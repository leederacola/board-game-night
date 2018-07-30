import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { FiregameService } from '../firegame.service';

@Component({
  selector: 'app-firegamelist',
  templateUrl: './firegamelist.component.html',
  styleUrls: ['./firegamelist.component.css']
})
export class FiregamelistComponent implements OnInit {

  constructor(private fireService: FiregameService) { }

  games:any;

  ngOnInit() {
    this.getGamesList();
  }

  getGamesList() {
    // Use snapshotChanges().map() to store the key
    this.fireService.getGamesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(games => {
      this.games = games;
    });
  }
 
  // deleteCustomers() {
  //   this.gameService.deleteAll();
  // }
 
}


