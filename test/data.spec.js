import {  cargaInicial } from '../src/data.js';

/* 
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
 */

describe('cargaInicial', () => {
  it('is a function', () => {
    expect(typeof cargaInicial).toBe('function');
  });

  it('deberia retornar cunatos tipos hay de grass`', () => {
    const dataComplete = 
      [{
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
        "size": {
          "height": "0.71 m",
          "weight": "6.9 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2"
        },

      },];

    const pokemonListDiv = "";

    expect(cargaInicial(dataComplete, pokemonListDiv).length).toBe('1');
  })
}

);
