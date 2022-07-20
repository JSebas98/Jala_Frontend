import { Component } from "@angular/core";

@Component({
    selector: 'welcome-component',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

    pokedexImgURL = 'assets/pokedex_img.png';
    addPokemonImgURL = 'assets/add_pokemon_img.png';
    constructor() {}
}