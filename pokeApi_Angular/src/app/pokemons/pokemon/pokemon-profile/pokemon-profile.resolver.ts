import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { PokemonProfile, resolveResponse } from 'src/app/utils/types';
import { PokemonService } from "../../pokemon.service";

@Injectable({
    providedIn: 'root'
})
export class PokemonProfileResolver implements Resolve<PokemonProfile> {
    constructor(private pokemonService: PokemonService) {}
    
    resolve(route: ActivatedRouteSnapshot): resolveResponse<PokemonProfile> {
        return this.pokemonService.getPokemonProfile(parseInt(route.paramMap.get('id') || '1'));
    }
}