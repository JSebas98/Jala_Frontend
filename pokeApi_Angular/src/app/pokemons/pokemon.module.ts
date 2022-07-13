import { NgModule } from "@angular/core";
import { PokedexComponent } from './pokemon-list/pokedex-component/pokedex.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { PokecardComponent } from './pokemon-list/pokecard-component/pokecard.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CommonModule } from "@angular/common";
import { NoContentComponent } from "../core/no-content-component/no-content.component";

@NgModule({
    declarations: [
        PokedexComponent,
        PokecardComponent,
        PokemonProfileComponent,
        NoContentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    exports: [ ],
    providers: [ ],
})
export class PokemonModule {}