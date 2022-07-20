import { Component, Input, OnInit } from '@angular/core';
import { pokemonColorMap } from 'src/app/utils/pokemonColorHash';
import { PokeCard, PokemonEvolutionChain } from 'src/app/utils/types';
import { PokemonService } from '../../../pokemon.service';

@Component({
    selector: 'pokemon-evolutions',
    templateUrl: './pokemon-evolutions.component.html',
    styleUrls: ['./pokemon-evolutions.component.scss']
})
export class PokemonEvolutions implements OnInit {

    @Input()
    evolutionChainURL!: string;

    pokemonEvolutions: PokeCard[] = [];

    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        this.getPokemonEvolutions(this.evolutionChainURL);
    }

    getPokemonEvolutions(url: string) {
        this.pokemonService.getPokemonEvolutions(url)
            .subscribe((evolutions) => {
                let evolution_chain: PokemonEvolutionChain = evolutions.chain;
                do {
                    const id = this.getPokemonIdFromUrl(evolution_chain.species.url);
                    this.pokemonEvolutions.push({
                        name: evolution_chain.species.name,
                        image: this.pokemonService.getPokemonImageUri(parseInt(id)),
                        color: pokemonColorMap[id],
                        id: id
                    });
                    evolution_chain = evolution_chain.evolves_to[0];
                } while (!!evolution_chain);
            });
    }

    private getPokemonIdFromUrl(url: string): string {
        const id: string = url.split('/')[6];
        return id;
    }
}