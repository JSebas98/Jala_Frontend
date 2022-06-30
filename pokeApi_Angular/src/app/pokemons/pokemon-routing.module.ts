import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokemon-list/pokedex-component/pokedex.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile.component';

const routes: Routes = [
    { path: 'pokedex', component: PokedexComponent },
    { path: 'pokedex/:id', component: PokemonProfileComponent },
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }