// Cat class
class Cat {
    #loneliness

    constructor (hunger, loneliness, tiredness) {
        this.hunger = this.#adjustTopValues(hunger);
        this.loneliness = this.#setLonelinessLevel(loneliness);
        this.tiredness = this.#adjustTopValues(tiredness);
    }

    /**
     * Generates random number between 1 and 10 to indicate
     * cat's level of satisfaction with task.
     * @returns a random number between 1 and 10
     */
    #generateStatusValue(){
        return Math.floor((Math.random() * 10) + 1);
    }

    #adjustTopValues(propertyValue){
        if (propertyValue < 0) {
            return 0;
        }

        if (propertyValue > 10) {
            return 10;
        }

        return propertyValue;
    }

    #setLonelinessLevel(value) {
        this.#loneliness = this.#adjustTopValues(value);
    }

    /**
     * Prints in console the cat's current state
     * @returns a String with cat's levels of hunger, loneliness, tiredness
     */
    getStatus () {
        console.log(`\nCat status:
        Hunger: ${this.hunger},
        Loneliness: ${this.#loneliness},
        Tiredness: ${this.tiredness}`);
    }

    getCatNeeds(){
        if (this.hunger >= 8){
            console.log("Cat needs to be fed urgently!");
        }

        if (this.#loneliness >= 8) {
            console.log("Cat needs to play with you urgently!");
        }

        if (this.tiredness >= 8) {
            console.log("Cat needs to sleep!");
        }
    }

    getHungerLevel(){
        return `Cat's hunger level: ${this.hunger}`;
    }

    getTirednessLevel(){
        return `Cat's tiredness level: ${this.tiredness}`;
    }

    getLonelinessLevel(){
        return `Cat's loneliness level: ${this.#loneliness}`;
    }

    feed() {
        console.log("Cat is eating... Ñom, ñom...")
        let satisfactionLevel = this.#generateStatusValue();
        this.hunger = this.#adjustTopValues(this.hunger - satisfactionLevel);

        console.log("Cat has been fed!")
    }

    sleep() {
        console.log("Cat is sleeping... Zzzz...")
        let satisfactionLevel = this.#generateStatusValue();
        this.tiredness = this.#adjustTopValues(this.tiredness - satisfactionLevel);
        
        console.log("Cat is awake now!");
    }

    play () {
        console.log("Cat is playing!")
        let satisfactionLevel = this.#generateStatusValue();
        let tirednessLevel = this.#generateStatusValue();
        this.#setLonelinessLevel(this.#loneliness - satisfactionLevel);
        this.tiredness = this.#adjustTopValues(this.tiredness + tirednessLevel);
        
        console.log("Cat does not want to play anymore!");
    }

    static feedCats(...Cats){
        Cats.forEach((cat) => cat.feed());
    }

}


let misifus = new Cat(10, 10, 10);
let tommy = new Cat(8, 5, 3);
let katty = new Cat(4, 9, 6);

misifus.getStatus();
misifus.feed();
misifus.getStatus();
misifus.sleep();
misifus.getStatus();
// console.log(misifus.getHungerLevel());
// console.log(misifus.getLonelinessLevel());
// console.log(misifus.getTirednessLevel());
misifus.play();
misifus.getStatus();


// Cat.feedCats(misifus, tommy, katty);
// misifus.getStatus();
// tommy.getStatus();
// katty.getStatus();

// misifus.getCatNeeds();
// tommy.getCatNeeds();
// katty.getCatNeeds();