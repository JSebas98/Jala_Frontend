dataPokemons.results.forEach((pokemon, i) => {
    let container = document.getElementById("pokedex");
    let pokeCard = document.createElement("poke-card");
    let backgroundColor = pokemonColorMap[i+1];

    pokeCard.setAttribute("p-image", getPokemonImageUri(i+1));
    pokeCard.setAttribute("p-name", pokemon.name);
    pokeCard.setAttribute("color", backgroundColor);

    container.appendChild(pokeCard);
});

customElements.define('poke-card', PokemonCard);