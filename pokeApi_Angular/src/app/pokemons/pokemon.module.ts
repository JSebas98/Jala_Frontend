import { NgModule } from "@angular/core";
import { PokedexComponent } from './pokemon-list/pokedex-component/pokedex.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PokecardComponent } from './pokemon-list/pokecard-component/pokecard.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CommonModule } from "@angular/common";
import { NoContentComponent } from "../core/no-content-component/no-content.component";
import { PokemonProfileComponent } from "./pokemon/pokemon-profile/pokemon-profile.component";
import { PokemonAddComponent } from "./pokemon/pokemon-add/pokemon-add.component";
import { PokemonStatsChart } from "./pokemon/pokemon-profile/pokemon-stats/pokemon-stats.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        NoContentComponent,
        PokecardComponent,
        PokedexComponent,
        PokemonAddComponent,
        PokemonProfileComponent,
        PokemonStatsChart,
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        PokemonRoutingModule,
        ReactiveFormsModule,
    ],
    exports: [ ],
    providers: [ ],
})
export class PokemonModule {}