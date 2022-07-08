import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PokemonProfile } from "src/app/utils/types";
import { PokemonService } from '../pokemon.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonProfileResolver implements Resolve<PokemonProfile> {
    constructor(private pokemonService: PokemonService) {}
    
    resolve(route: ActivatedRouteSnapshot): PokemonProfile | Observable<PokemonProfile> | Promise<PokemonProfile> {
        return this.pokemonService.getPokemonProfile(parseInt(route.paramMap.get('id') || '1'));
    }
}