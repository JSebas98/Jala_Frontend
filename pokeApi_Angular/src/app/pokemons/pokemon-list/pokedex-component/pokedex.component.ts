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
    pokecardFilteredList: PokeCard[] = [];
    limit: number = 50;
    offset: number = 0;
    search: string = '';

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.retrievePokemonList();
    }

    public retrievePokemonList(): void {
        this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe(
                (data: {results: Pokemon[]}) => {
                    this.pokecardFullList = this.createPokeCardsFromResult(data);
                });
        this.offset += this.limit;
    }

    private createPokeCardsFromResult(data: {results: Pokemon[]}): PokeCard[] {
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
        this.offset = this.limit * number;
        this.retrievePokemonList();
    }
}