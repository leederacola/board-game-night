import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// my components
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamesComponent } from './games/games.component';
import { TrialComponent } from './trial/trial/trial.component';

import { GamecrudComponent } from './crud/gamecrud/gamecrud.component';
import { PlayercrudComponent } from './crud/playercrud/playercrud.component';
import { NavComponent } from './nav/nav.component';

// angular material
import {MatToolbarModule} from '@angular/material';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    GameDetailComponent,
    MessagesComponent,
    GamesComponent,

    WelcomeComponent,

    TrialComponent,
    GamecrudComponent,
    PlayercrudComponent,
    NavComponent,
    PlayerComponent,

  ],
  imports: [
    // ng
    BrowserModule, HttpClientModule, BrowserAnimationsModule, FormsModule, AppRoutingModule,
    // material
    MatToolbarModule, 
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
