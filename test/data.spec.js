import { cargaInicial, cargarTipo } from '../src/data.js';
/* import data from './data/pokemon/pokemon.js';
const filtro = "grass"; */



/* describe('inicial', () => {
  it('loads 251 Pokémon cards', () => {
    const mockPokemonListDiv = document.createElement('div'); // Simulamos un contenedor de tarjetas

    // Llamamos a la función cargaInicial con los datos y el contenedor simulado
    cargaInicial(data, mockPokemonListDiv);

    // Verificamos que se hayan cargado las 251 tarjetas
    const cardElements = mockPokemonListDiv.getElementsByClassName('tarjetaPokemon');
    expect(cardElements.length).toBe(251);
  });
});
 */
 
describe('Tipo que escoge', () => { // Título del test
  it('debe devolver el tipo de Pokémon grass', () => { // Descripción del caso de prueba
    

    expect(cargarTipo).toBe('cargarTipo');
  });
});


describe('cargaInicial', () => {
  it('Es una funcion', () => {
    expect(typeof cargaInicial).toBe('function');
  });
});

