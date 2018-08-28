import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// my components
import { AppComponent } from './app.component';
import { WelcomeComponent } from '../app/components/welcome/welcome.component';
import { GameDetailComponent } from '../app/components/game-detail/game-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from '../app/components/nav/nav.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
// angular material
import {MatToolbarModule} from '@angular/material';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PlayerComponent } from '../app/components/player/player.component';
import { GameListComponent } from '../app/components/game-list/game-list.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameDetailComponent,
    WelcomeComponent,
    NavComponent,
    PlayerComponent,
    GameListComponent,


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
