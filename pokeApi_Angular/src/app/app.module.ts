import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pokedexComponent } from './components/pokedex-component/pokedex.component';
import { pokecardComponent } from './components/pokecard-component/pokecard.component';

@NgModule({
  declarations: [
    AppComponent,
    pokedexComponent,
    pokecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
