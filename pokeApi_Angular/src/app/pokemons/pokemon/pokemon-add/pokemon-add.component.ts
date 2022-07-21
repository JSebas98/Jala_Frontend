import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PokeCard } from "src/app/utils/types";
import Swal from "sweetalert2";

@Component({
    selector: 'add-pokemon-form',
    templateUrl: './pokemon-add.component.html',
    styleUrls: ['./pokemon-add.component.scss']
})
export class PokemonAddComponent implements OnInit {
    
    pokecard!: PokeCard;
    submitted = false;

    profileForm: FormGroup = this.fb.group({
        pokemonID: ['', [Validators.required]],
        pokemonName: ['', [Validators.required]],
        pokemonImage: ['', [Validators.required]],
        pokemonColor: ['', [Validators.required]]
    });
    
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        
    }

    onSubmit() {
        const pokemonInfo = this.profileForm.value; 
        this.loadPokecardInfo(pokemonInfo);
        this.showSuccessMessage();
        this.showNewPokecard();
    }

    loadPokecardInfo(pokemonInfo: any) {
        this.pokecard = {
            name: pokemonInfo.pokemonName,
            image: pokemonInfo.pokemonImage,
            color: pokemonInfo.pokemonColor,
            id: pokemonInfo.pokemonID
        }
    }

    getErrorMessage() {
        return 'This is a required field.';
    }

    showSuccessMessage() {
        Swal.fire({
            title: 'Pokemon created!',
            text: 'Take a look at your new Pokemon.',
            icon: 'success',
            confirmButtonText: 'Continue'
        });
    }

    showNewPokecard() {
        this.submitted = true;
    }
}