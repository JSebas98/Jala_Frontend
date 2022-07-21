import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowsUpDown, faChevronUp, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { PokemonProfile } from 'src/app/utils/types';
import { PokemonService } from "../../pokemon.service";

@Component({
    selector: 'pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {
    
    pokemonProfile!: PokemonProfile;
    evolutionsVisible = false;
    evolutionAction = 'View';
    weightIcon = faWeightHanging;
    heightIcon = faArrowsUpDown;

    constructor(
        private pokemonService: PokemonService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id') || '1';
            this.retrievePokemonInfo(parseInt(id));
        });
    }
    
    retrievePokemonInfo(pokemonId: number) {
        this.pokemonService.getPokemonProfile(pokemonId)
            .subscribe((pokemon) => {
                this.pokemonProfile = pokemon;
            });       
    }
    
    goBack() {
        this.router.navigate([`/pokedex`]);
    }

    toogleEvolutions() {
        this.evolutionsVisible = !this.evolutionsVisible;
        this.evolutionAction = this.evolutionsVisible ? 'Hide' : 'View';
    }
}