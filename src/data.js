import data from './data/pokemon/pokemon.js';

export const cargarTipo = (listPokemon, comboFiltro) => {
  // let comboFiltro = document.getElementById('numberSelector', valueNumber);
  const pokemons = data.pokemon.filter(type => type.type.includes(comboFiltro.value));

  listPokemon.innerHTML = ''; //borra todo el contenido dentro del elemento DIV-lisPokemon
  pokemons.forEach(pokemon => { // recorre cada elemento en el arreglo pokemons.
    let divType = ''; //Dec.variable divTypedivType, que se utilizará para construir una cadena de elementos HTML que representan los tipos del Pokémon. 
    pokemon.type.forEach(type => {//itera a través de cada tipo del Pokémon 
      divType += `<a class="type-${type}">${type}</a>`;
    }); ///Para cada tipo, se construye un elemento <a> (enlace) con una clase CSS basada en el tipo del Pokémon,
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'tarjetaPokemon'; //asigna la clase CSS 'tarjetaPokemon'
    //pokemonDiv contenido HTML del div utilizando plantillas de cadena crearestructura de una tarjeta Pokémon
    //contiene toda la información de la tarjeta Pokémon 
    pokemonDiv.innerHTML =
      `<div class="card-front"><a class="namePokemon">${pokemon.name}</a>
    <div class="card-type">${divType}</div>
    <div class="imgpokemon"><img src="${pokemon.img}" alt=""></div>
    <div><div class="card-back">
    <div class="card-description">
    <p>${pokemon.about}</p></div>
    </div>`;
    /* 
se agrega como hijo al elemento con el ID pokemonListDiv, inserta en la página web. */
    listPokemon.appendChild(pokemonDiv);

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
