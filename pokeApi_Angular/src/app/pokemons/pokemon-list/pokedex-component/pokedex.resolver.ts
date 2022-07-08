import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { PokemonAPI } from "src/app/utils/types";
import { PokemonService } from "../../pokemon.service";

@Injectable({
    providedIn: 'root'
})
export class PokedexResolver implements Resolve<{results: PokemonAPI[]}>{

    constructor(private pokemonService: PokemonService) {}

    resolve(): { results: PokemonAPI[]; } | Observable<{ results: PokemonAPI[]; }> | Promise<{ results: PokemonAPI[]; }> {
        return this.pokemonService.getPokemonList();
    }

}