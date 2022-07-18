import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokemon-list/pokedex-component/pokedex.component';
import { PokedexResolver } from './pokemon-list/pokedex-component/pokedex.resolver';
import { PokemonAddComponent } from './pokemon/pokemon-add/pokemon-add.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { PokemonProfileResolver } from './pokemon/pokemon-profile/pokemon-profile.resolver';

const routes: Routes = [
    { 
        path: '',
        component: PokedexComponent,
        resolve: {
            pokedex: PokedexResolver
        }
    },
    {
        path: 'add-pokemon',
        component: PokemonAddComponent,
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