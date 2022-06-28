import { NgModule } from "@angular/core";
import { PokedexComponent } from './pokemon-list/pokedex-component/pokedex.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { PokecardComponent } from './pokemon/pokecard-component/pokecard.component';

@NgModule({
    declarations: [
        PokedexComponent,
        PokecardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        PokedexComponent,
        PokecardComponent
    ]
})
export class PokemonModule {}