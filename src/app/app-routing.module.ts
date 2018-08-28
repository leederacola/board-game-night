import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GameDetailComponent } from 'src/app/components/game-detail/game-detail.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'detail/:id', component: GameDetailComponent},
  // { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}