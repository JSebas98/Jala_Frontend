import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from "rxjs";
import { BasicStats, Description, GenerationPokemons, PokemonAPI, PokemonDetails, PokemonProfile, PokemonSpecies, PokemonType } from "../utils/types";
import { pokemonTypeColorMap } from "../utils/pokemonColorHash";


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
                height: pokemonDetails.height / 10,
                weight: pokemonDetails.weight / 10,
                genus: this.getPokemonGenus(pokemonSpecies),
                types: this.getPokemonTypes(pokemonDetails),
                stats: this.getPokemonStats(pokemonDetails),
                color: pokemonSpecies.color.name,
                image: this.getPokemonImage(pokemonDetails)
            }))
        );

        return pokemonProfile;
    }

    getPokemonsByGeneration(generation: number): Observable<GenerationPokemons> {
        return this.http
            .get(`https://pokeapi.co/api/v2/generation/${generation}`) as Observable<GenerationPokemons>;
    }

    getPokemonDescription(pokemonSpecies: PokemonSpecies): Description[] {
        const versions: string[] = ['x', 'y'];
        const spanishDescriptions: string[] = pokemonSpecies.flavor_text_entries
            .filter(entry => entry.language.name === 'es' && versions.includes(entry.version.name))
            .map(entry => entry.flavor_text);

        const descriptions: string[] = pokemonSpecies.flavor_text_entries
            .filter(entry => entry.language.name === 'en' && versions.includes(entry.version.name))
            .map(entry => entry.flavor_text);

        const pokemonDescription = [
            {
                language: 'en',
                texts: descriptions
            },
            {
                language: 'es',
                texts: spanishDescriptions
            }
        ]

        return pokemonDescription;
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

    getPokemonTypes(PokemonDetails: PokemonDetails): PokemonType[] {
        return PokemonDetails.types
            .map(type => ({
                type: type.type.name,
                color: pokemonTypeColorMap[type.type.name] ? pokemonTypeColorMap[type.type.name] : 'gray' }))
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