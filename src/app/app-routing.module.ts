import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from 'src/app/games/games.component';
// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GameDetailComponent } from 'src/app/game-detail/game-detail.component';
import { EventGamesComponent} from 'src/app/event/event-games/event-games.component'
import { EventPlayersComponent} from 'src/app/event/event-players/event-players.component';

import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { EventMainComponent } from './event/event-main/event-main.component';
// firebase trial components



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'games', component: GamesComponent },
  { path: 'welcome', component: WelcomeComponent },

  { path: 'detail/:id', component: GameDetailComponent},
  // { path: 'dashboard', component: DashboardComponent },

  // event router

  { path: 'eventPlayers', component: EventPlayersComponent, outlet: "eventRouter"},
  { path: 'eventGames', component: EventGamesComponent, outlet: "eventRouter"}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}