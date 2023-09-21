import { cargarTipo, ordenarAZ, tiposKanto } from '../src/data.js';

describe('cargarTipo', () => {
  it('debería ser una función', () => {
    expect(typeof cargarTipo).toBe('function');
  });

  it('retorna grass', () => {
    const selectorID = "grass";
    const data = {
      "pokemon": [
        { "name": "bulbasaur", "type": "grass" },
        { "name": "ponyta", "type": "fire" },
        { "name": "blastoise", "type": "water" },
      ]
    }

    expect(cargarTipo(data.pokemon, selectorID)).toEqual([{ "name": "bulbasaur", "type": "grass" }]);
  });
  it('full test', () => {
    const filter = "";
    const data = {
      "pokemon": [
        { "name": "wartortle", "type": "dark" },
        { "name": "pikachu", "type": "electric" },
        { "name": "blastoise", "type": "water" }
      ]
    }
    expect(cargarTipo(data.pokemon, filter)).toBeFalsy();
  });
});

describe('ordenarAZ', () => {
  it('Debería ser una función', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('retorna los nombres en forma A-Z, es decir Ascendentes', () => {
    const data = {
      "pokemon": [
        { "name": "raichu" },
        { "name": "hypno" },
        { "name": "caterpie" },
        { "name": "xatu" }
      ]
    }
    expect(ordenarAZ(data.pokemon)).toEqual([{ "name": "caterpie" }, { "name": "hypno" }, { "name": "raichu" }, { "name": "xatu" }]);
  });
});

describe('tiposKanto', () => {
  it('Debería ser una función', () => {
    expect(typeof tiposKanto).toBe('function');
  });
  
  it('Debe mostrar la generación KANTO', () => {
    const data = {
      "pokemon": [
        { "name": "pidgeot", "generation": "kanto", "type": "flying" },
        { "name": "charizard", "generation": "kanto", "type": "fire" },
      
      ]
    };
    
    expect(tiposKanto(data.pokemon)).toEqual({ "bug": 0, "dark": 0, "dragon": 0, "electric": 0, "fairy": 0, "fighting": 0, "fire": 0, "flying": 0, "ghost": 0, "grass": 1, "ground": 0, "ice": 0, "normal": 0, "poison": 0, "psychic": 0, "rock": 0, "steel": 0, "water": 0 });
  });
});

