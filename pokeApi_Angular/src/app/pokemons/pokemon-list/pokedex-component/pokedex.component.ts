import { Component, OnInit } from "@angular/core";
import { PaginationDirection, PokeCard, PokemonAPI } from "src/app/utils/types";
import { PokemonService } from '../../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { pokemonColorMap } from "src/app/utils/pokemonColorHash";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'pokedex-component',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

    pokecardFullList: PokeCard[] = [];
    pokecardFilteredList: PokeCard[] = [];
    limit: number = 50;
    offset: number = 0;
    pageNumber = 1;
    search: string = '';
    generation = 0;
    searchIcon = faSearch;
    firstPageIcon = faAnglesLeft;
    prevPageIcon = faAngleLeft;
    nextPageIcon = faAngleRight;
    lastPageIcon = faAnglesRight;

    constructor(
        private router: ActivatedRoute,
        private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.retrievePokemonList();
    }

    onChange(event: any) {
        this.getPokemonsByGeneration(event.target.value);
    }

    public retrievePokemonList(): void {
        const pokemons = this.router.snapshot.data['pokedex'];
        this.pokecardFullList = this.createPokeCardsFromResult(pokemons.results);
        this.offset += this.limit;
    }

    private createPokeCardsFromResult(data: PokemonAPI[]): PokeCard[] {
        return data.map((pokemon) => {
                const id: string = this.getPokemonIdFromUrl(pokemon.url);
                return {
                    name: pokemon.name,
                    image: this.pokemonService.getPokemonImageUri(parseInt(id)),
                    color: pokemonColorMap[id],
                    id: id
                };
            });
    }

    private getPokemonIdFromUrl(url: string): string {
        const id: string = url.split('/')[6];
        return id;
    }

    public searchPokemons(): void {
        this.pokecardFilteredList = this.pokecardFullList.slice();
        this.pokecardFilteredList = this.pokecardFilteredList.filter(pokecard => pokecard.name.includes(this.search));
    }

    public loadNewPokemons(direction: PaginationDirection): void {
        this.updatePageNumberByPaginationDirection(direction);
        const newOffset = this.limit * (this.pageNumber-1);
        if(newOffset !== this.offset) {
            this.offset = newOffset;
            this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe(
                (data: {results: PokemonAPI[]}) => {
                    this.pokecardFullList = this.createPokeCardsFromResult(data.results);
                });
        }
    }

    public updatePageNumberByPaginationDirection(direction: PaginationDirection) {
        if (direction === 'first') {
            this.pageNumber = 1;
        } 
        if (direction === 'previous') {
            this.pageNumber -= 1;
        }
        if (direction === 'next') {
            this.pageNumber += 1;
        }
        if (direction === 'last') {
            this.pageNumber = 18;
        }
    }

    public getPokemonsByGeneration(generation: number): void {
        if (generation == 0) {
            this.retrievePokemonList();
        } else {
            this.pokemonService.getPokemonsByGeneration(generation)
            .subscribe( (pokemons) => {
                this.pokecardFullList = this.createPokeCardsFromResult(pokemons.pokemon_species);
            });
        }
    }
}