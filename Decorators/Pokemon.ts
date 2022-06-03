type Move = {
    name: string,
    power: number
};

const checkPP = (pokemon: Pokemon) => {
  if (pokemon.ppAvailable < 1) {
    console.log('Not enough power!');
    }
};

class Pokemon {
  name: string;
  ppAvailable = 1;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }
  
  @checkPP(this)
  fight(move: Move) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }

  calculateDamage(move: any) {
    return move.power;
  }
}

const thunderbolt: Move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.fight(thunderbolt);
pikachu.fight(thunderbolt);