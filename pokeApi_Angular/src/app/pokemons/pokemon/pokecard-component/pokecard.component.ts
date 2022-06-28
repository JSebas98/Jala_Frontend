import { Component, OnInit } from "@angular/core";
import { PokeCard } from "src/app/utils/types";
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from '../../../utils/utils';



@Component({
    selector: 'pokecard-component',
    templateUrl: './pokecard.component.html',
    styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {

    pokeCardList: PokeCard[] = [];

    ngOnInit(): void {
        this.getPokemonBasicInfo();
    }

    getPokemonBasicInfo() {
        dataPokemons.results.forEach((pokemon, i) => {
            const index: number = i+1;
            this.pokeCardList.push({
                name: pokemon.name,
                image: getPokemonImageUri(index),
                color: pokemonColorMap[index.toString()]
            });
        })
    }

}