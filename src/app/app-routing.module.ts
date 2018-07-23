import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from 'src/app/games/games.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GameDetailComponent } from 'src/app/game-detail/game-detail.component';
import { EmptyComponent } from 'src/app/empty/empty.component';

const routes: Routes = [
  { path: '', redirectTo: '/empty', pathMatch: 'full'},
  { path: 'games', component: GamesComponent },
  { path: 'empty', component: EmptyComponent },

  { path: 'detail/:id', component: GameDetailComponent},
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}