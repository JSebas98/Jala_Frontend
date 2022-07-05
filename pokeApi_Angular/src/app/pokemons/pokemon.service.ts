import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pokemon } from "../utils/types";


@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    
    private API: string = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) {}

    getPokemonList(offset: number = 0, limit: number = 50): Observable<{results: Pokemon[]}> {
        return this.http
            .get(`${this.API}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>;
    }

    getPokemonImageUri(id: number): string {
        const imageId = ('00' + id).slice(-3);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
    }
}