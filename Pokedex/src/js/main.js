import _ from 'lodash';
import 'Styles/styles.less';
import { pokemonColorMap, getPokemonImageUri } from 'Utils/utils.js';
import { PokemonCard } from 'Utils/pokemon-card.js';
import FacebookLogo from 'Images/facebook.png';
import InfoIcon from 'Images/info.png';
import InstagramLogo from 'Images/instagram.png';
import Pokeball from 'Images/pokeball.png';
import PokemonLogo from 'Images/pokemon-logo.png';
import TwitterLogo from 'Images/twitter.png';
import YouTubeLogo from 'Images/youtube.png';


function loadImages() {
    let pokemonLogo = document.getElementById("pokemon-logo");
    pokemonLogo.src = PokemonLogo;

    let pokedexIcon = document.getElementById("pokedex-icon");
    pokedexIcon.src = Pokeball;

    let pokemonLogoFooter = document.getElementById("pokemon-logo-footer");
    pokemonLogoFooter.src = PokemonLogo;
    
    let facebookLogo = document.getElementById("facebook");
    facebookLogo.src = FacebookLogo;

    let instagramLogo = document.getElementById("instagram");
    instagramLogo.src = InstagramLogo;

    let twitterLogo = document.getElementById("twitter");
    twitterLogo.src = TwitterLogo;

    let youtubeLogo = document.getElementById("youtube");
    youtubeLogo.src = YouTubeLogo;

    let infoIcon = document.getElementsByClassName("more-info");
    Array.from(infoIcon).forEach((img) => {
        img.src = InfoIcon;
    });
}

loadImages();

// Initializing popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// Fetching from PokeAPI using API Fetch
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