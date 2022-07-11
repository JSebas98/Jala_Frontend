import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from "rxjs";
import { BasicStats, PokemonAPI, PokemonDetails, PokemonProfile, PokemonSpecies } from "../utils/types";


@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    
    private API: string = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) {}

    getPokemonList(offset: number = 0, limit: number = 50): Observable<{results: PokemonAPI[]}> {
        return this.http
            .get(`${this.API}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: PokemonAPI[]}>;
    }

    getPokemonImageUri(id: number): string {
        const imageId = ('00' + id).slice(-3);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
    }

    getPokemonDetails(pokemonId: number): Observable<PokemonDetails> {
        return this.http
            .get(`${this.API}/pokemon/${pokemonId}/`) as Observable<PokemonDetails>;
    }

    getPokemonSpecies(pokemonId: number): Observable<PokemonSpecies> {
        return this.http
            .get(`${this.API}/pokemon-species/${pokemonId}/`) as Observable<PokemonSpecies>
    }

    getPokemonProfile(pokemonId: number): Observable<PokemonProfile> {
        const pokemonDetails = this.getPokemonDetails(pokemonId);
        const pokemonSpecies = this.getPokemonSpecies(pokemonId);
        const pokemonProfile = forkJoin([pokemonDetails, pokemonSpecies]).pipe(
            map(([pokemonDetails, pokemonSpecies]) => ({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                description: this.getPokemonDescription(pokemonSpecies),
                height: pokemonDetails.height,
                weight: pokemonDetails.weight,
                genus: this.getPokemonGenus(pokemonSpecies),
                types: this.getPokemonTypes(pokemonDetails),
                stats: this.getPokemonStats(pokemonDetails),
                color: pokemonSpecies.color.name,
                image: this.getPokemonImage(pokemonDetails)
            }))
        );

        return pokemonProfile;
    }

    getPokemonDescription(pokemonSpecies: PokemonSpecies): string[] {
        const descriptions: string[] = pokemonSpecies.flavor_text_entries
            .filter(entry => entry.language.name === 'en')
            .map(entry => entry.flavor_text);

        return this.cleanDuplicateDescriptions(descriptions);
    }

    getPokemonGenus(pokemonSpecies: PokemonSpecies): string {
        const genera = pokemonSpecies.genera
            .filter(genus => genus.language.name === 'en');

        return genera[0].genus;
    }

    getPokemonStats(pokemonDetails: PokemonDetails): BasicStats[] {
        return pokemonDetails.stats
            .map(stat => ({ base_stat: stat.base_stat, stat: stat.stat.name }));
    }

    getPokemonTypes(PokemonDetails: PokemonDetails): string[] {
        return PokemonDetails.types
            .map(type => type.type.name);
    }

    getPokemonImage(pokemonDetails: PokemonDetails): string {
        return pokemonDetails.sprites
            .other["official-artwork"]
            .front_default;
    }

    cleanDuplicateDescriptions(pokemonDescriptions: string[]): string[] {
        const uniqueDescriptions = new Set(pokemonDescriptions);
        return Array.from(uniqueDescriptions);
    }
}