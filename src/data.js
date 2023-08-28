import data from './data/pokemon/pokemon.js';
export const cargarTipo = (pokemonListDiv, comboFiltro) => {
 // let comboFiltro = document.getElementById('numberSelector', valueNumber);
  const pokemons = data.pokemon.filter(type => type.type.includes(comboFiltro.value));
  
  pokemonListDiv.innerHTML = '';
  pokemons.forEach(pokemon => {
    let divType = '';
    pokemon.type.forEach(type => {
      divType += `<a class="type-${type}">${type}</a>`;
    });
    
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'tarjetaPokemon';
    pokemonDiv.innerHTML = `<div class="card-front"><a class="namePokemon">${pokemon.name}</a><div class="card-type">${divType}</div><div class="imgpokemon"><img src="${pokemon.img}" alt=""></div><div><div class="card-back"><div class="card-description"><p>${pokemon.about}</p></div></div>`;
    pokemonListDiv.appendChild(pokemonDiv);

  });
};

export const cargaInicial = (dataComplete, pokemonListDiv) => {
  // Usa el método map() para crear un div para cada objeto de Pokémon
  //se crea una const pokemonDivs=se utiliza metodo map en la propiedad 'pokemon' del obj. dataComplete
  const pokemonDivs = dataComplete.pokemon.map(pokemon => {
    let divType = ``;
    pokemon.type.map(type => {
      divType += `<a class="type-${type}">${type}</a>`;
    });
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'tarjetaPokemon';
    pokemonDiv.innerHTML = `<div class="card-front"><a class="namePokemon">${pokemon.name}</a><div class="card-type">${divType}</div><div class="imgpokemon"><img src="${pokemon.img}" alt=""></div><div class="card-back"><div class="card-description"><p>${pokemon.about}</p></div></div></div>`;
    return pokemonDiv;

  });
  pokemonListDiv.innerHTML = '';
  // Agrega cada div de Pokémon al div principal en el DOM
  pokemonDivs.forEach(pokemonDiv => {
    pokemonListDiv.appendChild(pokemonDiv);
  });
}
