import { Component, Input, OnInit } from "@angular/core";
import { PokeCard } from "src/app/utils/types";
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from '../../../utils/utils';

@Component({
    selector: 'pokecard-component',
    templateUrl: './pokecard.component.html',
    styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent {

    @Input()
    pokeCard!: PokeCard;

}