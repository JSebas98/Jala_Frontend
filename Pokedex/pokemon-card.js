const template = document.createElement('template');

template.innerHTML = `
<style>
    .pokemon-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: ;
        margin: 10px;
        border-radius: 20px;
    }

    .pokemon-name {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>

<div class="pokemon-card">
    <div class="pokemon-image">
        <img src="" />
    </div>
    <div class="pokemon-name">
        <p></p>
    </div>
</div>
`

class PokemonCard extends HTMLElement{

    constructor(){
        super();
        let shadow = this.attachShadow({ mode: "open" });
        let content = template.content.cloneNode(true);

        content.querySelector("div.pokemon-card>.pokemon-image>img").setAttribute();
        content.querySelector("div.pokemon-card>.pokemon-name>p").setAttribute();

        shadow.appendChild(content);
    }
}

customElements.define("poke-card", PokemonCard);