import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { PokeCard } from "../utils/types";


@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    
    private API: string = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) {}

    getPokemonList(offset: number = 0, limit: number = 25): Observable<{results: PokeCard[]}> {
        return this.http
            .get(`${this.API}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: PokeCard[]}>;
    }

    getPokemonImageUri(id: number): string {
        const imageId = ('00' + id).slice(-3);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
    }
}