import { cargarTipo, ordenarAZ } from '../src/data.js'; 

//import data from './data/pokemon/pokemon.js';

describe('cargarTipo', () => { // Título del test
  it('deberia ser una funcion', () => { // Descripción del caso de prueba
    expect(typeof cargarTipo).toBe('function');
  });

  it('returns grass', () => {
    const selectorID = "grass";
    const data = {
      "pokemon": [
        { "name": "bulbasaur", "type": "grass" },
        { "name": "ponyta", "type": "fire" },
        { "name": "blastoise", "type": "water" },

      ]
    }

    expect(cargarTipo(data, selectorID)).toEqual([{ "name": "bulbasaur", "type": "grass" }]);
  });
})

describe('ordenaraz', () => {
  it('Deberia ser funcion', () => {
    expect(typeof ordenarAZ).tobe('funtion');
  });
  it('retorna los nombre en forma A-Z, es decir Ascendentes', () => {
    const data = {
      "pokemon": [
        { "name": "raichu" },
        { "name": "hypno" },
        { "name": "caterpie" },
        { "name": "xatu" }

      ]
    }
    expect(ordenarAZ(data)).toEqual([{ "name": "caterpie" }, { "name": "hypno" }, { "name": "raichu" }, { "name": "xatu" }]);
  });
});