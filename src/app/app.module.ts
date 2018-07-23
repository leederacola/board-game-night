import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamesComponent } from './games/games.component';

import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';
import { MaterialComponent } from './material/material.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameDetailComponent,
    MessagesComponent,
    GamesComponent,
    MaterialComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, HttpClientModule,
    HttpClientModule,
    MatButtonModule, MatButtonModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
