// Fetching from PokeAPI usinf API Fetch}
const offset = 0;

fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=25`)
    .then((resp) => resp.json()) // Convert into json
    .then((data) => {
        let pokemons = data.results;
        pokemons.forEach((pokemon, i) => {
            let container = document.getElementById("pokedex");
            let pokeCard = document.createElement("poke-card");
            let backgroundColor = pokemonColorMap[i+offset+1];

            pokeCard.setAttribute("p-image", getPokemonImageUri(i+offset+1));
            pokeCard.setAttribute("p-name", pokemon.name);
            pokeCard.setAttribute("color", backgroundColor);

            container.appendChild(pokeCard);            
        })

        customElements.define('poke-card', PokemonCard);
    }) 
    .catch((error) => {
        console.log(error);
    });


// Creating poke-cards from mockup information
// dataPokemons.results.forEach((pokemon, i) => {
//     let container = document.getElementById("pokedex");
//     let pokeCard = document.createElement("poke-card");
//     let backgroundColor = pokemonColorMap[i+1];

//     pokeCard.setAttribute("p-image", getPokemonImageUri(i+1));
//     pokeCard.setAttribute("p-name", pokemon.name);
//     pokeCard.setAttribute("color", backgroundColor);

//     container.appendChild(pokeCard);
// });

// customElements.define('poke-card', PokemonCard);