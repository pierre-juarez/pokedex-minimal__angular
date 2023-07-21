export class PokemonDetail{
  id: number = 0;
  order: number = 0;
  name: string = "";
  height: number = 0;
  ability: Ability[] = [];
  species: Species;
  types: Type[] = [];
  weight: number = 0;
  sprites: Sprite;
  stats: Stat[] = [];

  constructor(){
    this.species = new Species()
    this.sprites = new Sprite()
  }

}

class Ability{
  ability: {
    name: string;
  }

  constructor(){ 
    this.ability = {name: ""}
  }
 
}

class Species {
  url: string = "";
}

class Type {
  slot: number = 0;
  type: {
      name: string;
  } = {name: ""}
}

class Sprite {
  front_default: string = "";
}

class Stat {
  base_stat: number = 0;
  stat: {
      name: string;
  } = { name: "" }
}