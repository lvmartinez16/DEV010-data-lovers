import { cargarTipo } from '../src/data.js';

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

/* n */