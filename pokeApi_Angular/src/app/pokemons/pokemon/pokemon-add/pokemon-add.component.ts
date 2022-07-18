import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'add-pokemon-form',
    templateUrl: './pokemon-add.component.html',
    styleUrls: ['./pokemon-add.component.scss']
})
export class PokemonAddComponent implements OnInit {
    
    profileForm: FormGroup = new FormGroup({
        pokemonName: new FormControl(''),
        pokemonDescription: new FormControl('')
    });
    
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        
    }

    onSubmit() {
        console.warn(this.profileForm.value);
    }
}