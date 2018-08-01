import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from 'src/app/games/games.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GameDetailComponent } from 'src/app/game-detail/game-detail.component';

import { WelcomeComponent } from 'src/app/welcome/welcome.component';
// firebase trial components



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'games', component: GamesComponent },
  { path: 'welcome', component: WelcomeComponent },

  { path: 'detail/:key', component: GameDetailComponent},
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}