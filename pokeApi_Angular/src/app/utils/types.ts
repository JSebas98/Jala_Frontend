import { Observable } from 'rxjs';

type PokeCard = {
    name: string,
    image: string,
    color: string,
    id: string
}

type PokemonAPI = {
    name: string,
    url: string
}

type PokemonDetails = {
    abilities: [],
    base_experience: string,
    forms: [],
    height: number,
    id: number,
    moves: [],
    name: string,
    order: number,
    species: {},
    sprites: {
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    },
    stats: Stats[],
    types: {
        slot: number,
        type: {
            name: string,
            url: string
        }
    }[],
    weight: number
}

type PokemonSpecies = {
    base_happiness: number,
    capture_rate: number,
    color: {
        name: string,
        url: string
    },
    egg_groups: [],
    flavor_text_entries: {
        flavor_text: string,
        language: Language,
        version: {
            name: string,
            url: string
        }
    }[],
    genera: {
        genus: string,
        language: Language
    }[],
    generation: {},
    id: number,
    name: string,
    order: number,
    shape: {},
    varieties: []
}

type PokemonProfile = {
    id: number,
    name: string,
    description: Description[],
    height: number,
    weight: number,
    genus: string,
    types: PokemonType[],
    stats: BasicStats[],
    color: string,
    image: string
}

type Language = {
    name: string,
    url: string
}

type Stats = {
    base_stat: number,
    effort: number,
    stat: { 
        name: string,
        url: string
    }
}

type BasicStats = {
    base_stat: number,
    stat: string
}

type GenerationPokemons = {
    pokemon_species: PokemonAPI[];
}

type resolveResponse<T> = T | Observable<T> | Promise<T>;

type Description = {
    language: string,
    texts: string[]
}

type PokemonType = {
    type: string,
    color: string
}

type PaginationDirection = 'first' | 'previous' | 'next' | 'last';

export {
    PokeCard,
    PokemonAPI,
    PokemonDetails,
    PokemonSpecies,
    PokemonProfile,
    BasicStats,
    resolveResponse,
    GenerationPokemons,
    Description,
    PokemonType,
    PaginationDirection,
};