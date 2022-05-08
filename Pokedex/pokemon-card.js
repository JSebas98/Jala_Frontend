/**
 * Pokemon Card Web Component
 */
const template = document.createElement('template');

template.innerHTML = `
<style>
    .pokemon-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: #fff;
        margin: 10px;
        border-radius: 20px;
    }

    .pokemon-name {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        text-transform: capitalize;
    }
</style>

<div class="pokemon-card">
    <div class="pokemon-image">
        <img src="" class="p-image" />
    </div>
    <div class="pokemon-name">
        <p class="p-name"></p>
    </div>
</div>
`

class PokemonCard extends HTMLElement{

    constructor(){
        super();
        let shadow = this.attachShadow({ mode: "open" });
        let content = template.content.cloneNode(true);

        content.querySelector("div.pokemon-card>.pokemon-image>img").setAttribute("src", this.getAttribute("p-image"));
        content.querySelector("div.pokemon-card>.pokemon-name>p").innerText = this.getAttribute("p-name");
        content.querySelector(".pokemon-card").style.backgroundColor = this.getAttribute("color");

        // Change color to black if background color is white or yellow
        if (this.getAttribute("color") == "#fbf6f6" ||
            this.getAttribute("color") == "#f0f060e6") {
                content.querySelector("div.pokemon-card>.pokemon-name").style.color = "#000000";
            }

        shadow.appendChild(content);
    }
}