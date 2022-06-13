import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - CHECK - get a List of types from a pokemon, assing to a variable called types
  - CHECK - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class randomly
*/

const POKEMON_MOVES = 4;
const TEAM_SIZE = 3;
const NUMBER_OF_POKEMONS = 500;

export async function getSinglePokemon(id: PokemonId) {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export function getSingleMove(url: string) {
  return axios.get(url);
}

export function getInfoPokemon(id: PokemonId) {
  const pokemonRawData = getSinglePokemon(id);

  pokemonRawData.then((res) => {
    const pokemonInfo = {
      name: '',
      id: 0,
      moves: [],
      types: []
    };
    const types = res.data.types;
    const processedTypes = getPokemonTypes(types);

    const moves = res.data.moves;
    const processedMoves = getRandomPokemonMoves(moves);

    pokemonInfo.name = res.data.name;
    pokemonInfo.id = res.data.id;
    pokemonInfo.moves = processedMoves;
    pokemonInfo.types = processedTypes;

    console.log(pokemonInfo);

    return pokemonInfo;
  })
  .catch(error => {
    console.log(error);
  });
}

export function getPokemonTypes(types: any) {
  const pokemonTypes: Type[] = [];

  types.forEach(type => {
    pokemonTypes.push(type.type);
  });

  return pokemonTypes;
}

export function getRandomPokemonMoves(moves: any) {
  const pokemonMoves: Move[] = [];
  
  moves.forEach(move => {
    pokemonMoves.push(move.move);
  });

  const filteredPokemonMoves: Move[] = [];
  const randomIndexes: number[] = getRandomNumbers(POKEMON_MOVES, moves.length);

  for(let i=0; i<randomIndexes.length; i++) {
    const moveIndex = randomIndexes[i];
    filteredPokemonMoves.push(pokemonMoves[moveIndex]);
  }
  
  return filteredPokemonMoves;
}

export function getRandomNumbers(quantity: number, max: number): number[] {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < quantity) {
    const randomNum = Math.floor(Math.random() * (max));
    if (isRandomNumberValid(randomNumbers, randomNum)) {
      randomNumbers.push(randomNum);
    }
  }

  return randomNumbers;
}

export function isRandomNumberValid(randomNumbers: number[], randomNum: number) {
  return randomNumbers.indexOf(randomNum) === -1 && randomNum !== 0;
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = getRandomNumbers(TEAM_SIZE, NUMBER_OF_POKEMONS);
  }
}

type PokemonId = string | number;

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    this.buildFieldsPokemon(pokemonResult);
  }

  buildFieldsPokemon(pokemon: any) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.types = getPokemonTypes(pokemon.types);
    this.moves = getRandomPokemonMoves(pokemon.moves);
  }

  async getFullPokemonMoves(moves: Move[]) {
    const baseMoves: Move[] = getRandomPokemonMoves(moves);
    const listMoves = baseMoves.map(move => getSingleMove(move.url));
    const results = await Promise.all(listMoves);
    results.forEach((result, i) => {
      const fullMove = {
        name: result.data.name,
        url: baseMoves[i].url,
        type: result.data.type,
        damage: result.data.power,
        powerPoints: result.data.pp,
        accuracy: result.data.accuracy
      }
      
      this.moves.push(fullMove);
    });
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    console.log(`\nTypes:`);
    this.types.forEach(type => {
      console.log(`- ${type.name}`);
    });
    console.log(`\nMoves:`);
    this.moves.forEach(move => {
      console.log(`- ${move.name}`);
    });
  }
}

@getNewPokemons
export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [2, 4];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons);
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }
}
