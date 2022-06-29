import { Component, OnInit } from "@angular/core";
import { PokeCard, Pokemon } from "src/app/utils/types";
import { pokemonColorMap } from "src/app/utils/utils";
import { PokemonService } from '../../pokemon.service';

@Component({
    selector: 'pokedex-component',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

    pokecardFullList: PokeCard[] = [];
    pokemonRawList: Pokemon[] = [];
    limit: number = 25;
    offset: number = 0;
    search: string = '';

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe(
                (data: {results: Pokemon[]}) => {
                    this.pokecardFullList = this.createPokeCardsFromResult(data);
                    // this.pokemonRawList = [...this.pokemonRawList, ...data.results];
                });
        this.offset += this.limit;

    }

    createPokeCardsFromResult(data: {results: Pokemon[]}) {
        return data.results
            .map((pokemon) => {
                const id: string = this.getPokemonIdFromUrl(pokemon.url);
                return {
                    name: pokemon.name,
                    image: this.pokemonService.getPokemonImageUri(parseInt(id)),
                    color: pokemonColorMap[id],
                    id: this.formatId(id)
                };
            });
    }

    getPokemonIdFromUrl(url: string): string {
        const id: string = url.split('/')[6];
        return id;
    }

    formatId(id: string): string {
        return ('00' + id).slice(-3);
    } 

    searchPokemons() {
        return ;
    }
}