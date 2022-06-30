import { NgModule } from "@angular/core";
import { PokedexComponent } from './pokemon-list/pokedex-component/pokedex.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { PokecardComponent } from './pokemon-list/pokecard-component/pokecard.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
    declarations: [
        PokedexComponent,
        PokecardComponent,
        PokemonProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        PokedexComponent,
        PokecardComponent,
        PokemonProfileComponent,
        PokemonRoutingModule
    ]
})
export class PokemonModule {}