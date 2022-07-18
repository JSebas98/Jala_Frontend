import { Component, OnInit } from "@angular/core";
import { PokeCard, PokemonAPI } from "src/app/utils/types";
import { PokemonService } from '../../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { pokemonColorMap } from "src/app/utils/pokemonColorHash";

@Component({
    selector: 'pokedex-component',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

    pokecardFullList: PokeCard[] = [];
    pokecardFilteredList: PokeCard[] = [];
    limit: number = 50;
    offset: number = 0;
    search: string = '';
    generation = 0;
    messageGeneration = '';

    constructor(
        private router: ActivatedRoute,
        private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.retrievePokemonList();
    }

    public retrievePokemonList(): void {
        const pokemons = this.router.snapshot.data['pokedex'];
        this.pokecardFullList = this.createPokeCardsFromResult(pokemons);
        this.offset += this.limit;
    }

    private createPokeCardsFromResult(data: {results: PokemonAPI[]}): PokeCard[] {
        return data.results
            .map((pokemon) => {
                const id: string = this.getPokemonIdFromUrl(pokemon.url);
                return {
                    name: pokemon.name,
                    image: this.pokemonService.getPokemonImageUri(parseInt(id)),
                    color: pokemonColorMap[id],
                    id: id
                };
            });
    }

    private getPokemonIdFromUrl(url: string): string {
        const id: string = url.split('/')[6];
        return id;
    }

    public searchPokemons(): void {
        this.pokecardFilteredList = this.pokecardFullList.slice();
        this.pokecardFilteredList = this.pokecardFilteredList.filter(pokecard => pokecard.name.includes(this.search));
    }

    public loadNextPage(number: number): void {
        const newOffset = this.limit * number;
        if(newOffset !== this.offset) {
            this.offset = newOffset;
            this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe(
                (data: {results: PokemonAPI[]}) => {
                    this.pokecardFullList = this.createPokeCardsFromResult(data);
                });
        }
    }

    public filterPokemonsByGeneration(generation: number): void {
        this.generation = generation;
        if(generation > 0) {
            this.messageGeneration = `generation ${this.generation}.`;
            const pokemonNames: string[] = [];
            const pokemonsByGeneration = this.pokemonService.getPokemonsByGeneration(generation);
            pokemonsByGeneration.subscribe((generation) => {
                generation.pokemon_species
                    .forEach(pokemon => pokemonNames.push(pokemon.name));
                this.pokecardFilteredList = this.pokecardFullList.slice();
                this.pokecardFilteredList = this.pokecardFilteredList.filter((pokecard) => pokemonNames.includes(pokecard.name));
            });
        }
    }
}