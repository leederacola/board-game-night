import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/models/game';
import { DataFriendService } from '../../services/data-friend.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

playerCount: number;

  constructor(
    private dataService: DataFriendService,
  ) { }

  ngOnInit() { 
  }

  
}
