import { Component, OnInit } from "@angular/core";
import { PokeCard } from "src/app/utils/types";
import { PokemonService } from '../../pokemon.service';

@Component({
    selector: 'pokedex-component',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {

    pokecards: PokeCard[] = [];
    limit: number = 25;
    offset: number = 0;

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe(
                (data: {results: PokeCard[]}) => this.pokecards = [...this.pokecards, ...data.results]
            );
        this.offset += this.limit;
    }

    searchPokemons() {
        return ;
    }
}