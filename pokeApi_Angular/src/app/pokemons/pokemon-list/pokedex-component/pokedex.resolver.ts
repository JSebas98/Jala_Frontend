import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { PokemonAPI, resolveResponse } from "src/app/utils/types";
import { PokemonService } from "../../pokemon.service";



@Injectable({
    providedIn: 'root'
})
export class PokedexResolver implements Resolve<{results: PokemonAPI[]}>{

    constructor(private pokemonService: PokemonService) {}

    resolve(): resolveResponse<{ results: PokemonAPI[]; }> {
        return this.pokemonService.getPokemonList();
    }

}