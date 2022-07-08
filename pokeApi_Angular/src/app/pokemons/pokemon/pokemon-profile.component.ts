import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonDetails } from "src/app/utils/types";
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit{
    
    pokemonDetails!: PokemonDetails;

    constructor(
        private pokemonService: PokemonService,
        private location: Location,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.retrievePokemonInfo();
    }
    
    retrievePokemonInfo() {
        const pokemonId = this.route.snapshot.params['id'];
        this.pokemonService.getPokemonProfile(pokemonId)
            .subscribe((response) => {
                console.log(response);
            });       
    }
    
    goBack() {
        this.location.back();
    }
}