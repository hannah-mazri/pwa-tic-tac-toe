import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import {NbThemeModule} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
