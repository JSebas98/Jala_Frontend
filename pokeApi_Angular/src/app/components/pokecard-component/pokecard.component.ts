import { Component, OnInit } from "@angular/core";
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from '../../shared/utils';

type PokeCard = {
    name: string,
    image: string,
    color: string
}

@Component({
    selector: 'pokecard-component',
    templateUrl: './pokecard.component.html',
    styleUrls: ['./pokecard.component.scss']
})
export class pokecardComponent implements OnInit {

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
                color: pokemonColorMap[1]
            });
        })
    }

}