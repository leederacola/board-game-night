import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../models/game';
import { FiregameService } from '../firegame.service';

@Component({
  selector: 'app-firegamedetail',
  templateUrl: './firegamedetail.component.html',
  styleUrls: ['./firegamedetail.component.css']
})
export class FiregamedetailComponent implements OnInit {

  @Input() game: Game;

  constructor(private fireService: FiregameService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.fireService.updateGame(this.game.key, { active: isActive });
  }
 
  deleteCustomer() {
    this.fireService.deleteGame(this.game.key);
  }

}


