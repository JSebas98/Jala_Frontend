import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokeCard } from "src/app/utils/types";
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from '../../../utils/utils';

@Component({
    selector: 'pokecard-component',
    templateUrl: './pokecard.component.html',
    styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent {

    constructor(private router: Router) {}

    @Input()
    pokeCard!: PokeCard;

    goToPokemonProfile() {
        this.router.navigate([`/pokedex/${this.pokeCard.id}`]);
    }

}