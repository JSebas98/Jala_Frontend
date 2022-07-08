import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokemon-list/pokedex-component/pokedex.component';
import { PokedexResolver } from './pokemon-list/pokedex-component/pokedex.resolver';
import { PokemonProfileComponent } from './pokemon/pokemon-profile.component';
import { PokemonProfileResolver } from './pokemon/pokemon-profile.resolver';

const routes: Routes = [
    { 
        path: '',
        component: PokedexComponent,
        resolve: {
            pokedex: PokedexResolver
        }
    },
    { 
        path: ':id',
        component: PokemonProfileComponent,
        resolve: {
            pokemonProfile: PokemonProfileResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }