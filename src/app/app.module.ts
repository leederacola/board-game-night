import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// my components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayersComponent } from './players/players.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamesComponent } from './games/games.component';


// angular material
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatOptionModule, MatSelectModule, MatTab, MatTabsModule} from '@angular/material';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FiregamelistComponent } from './firegamelist/firegamelist.component';
import { FiregamedetailComponent } from './firegamedetail/firegamedetail.component';
import { FiregamecreateComponent } from './firegamecreate/firegamecreate.component';
import { TrialComponent } from './trial/trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameDetailComponent,
    MessagesComponent,
    GamesComponent,

    PlayersComponent,
    WelcomeComponent,
    FiregamelistComponent,
    FiregamedetailComponent,
    FiregamecreateComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, HttpClientModule,
    HttpClientModule,
    MatButtonModule, MatButtonModule, MatGridListModule, MatOptionModule, MatSelectModule, MatTabsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
