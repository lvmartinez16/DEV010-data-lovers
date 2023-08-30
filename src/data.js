import data from './data/pokemon/pokemon.js';

export const cargarTipo = (pokemonListDiv, comboFiltro) => {
  // let comboFiltro = document.getElementById('numberSelector', valueNumber);
  const pokemons = data.pokemon.filter(type => type.type.includes(comboFiltro.value));

  pokemonListDiv.innerHTML = ''; //borra todo el contenido dentro del elemento.
  pokemons.forEach(pokemon => { // recorre cada elemento en el arreglo pokemons.
    let divType = ''; //Dec.variable divTypedivType, que se utilizará para construir una cadena de elementos HTML que representan los tipos del Pokémon. 
    pokemon.type.forEach(type => {//itera a través de cada tipo del Pokémon 
      divType += `<a class="type-${type}">${type}</a>`;
    }); ///Para cada tipo, se construye un elemento <a> (enlace) con una clase CSS basada en el tipo del Pokémon,
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'tarjetaPokemon'; //asigna la clase CSS 'tarjetaPokemon'
    //pokemonDiv contenido HTML del div utilizando plantillas de cadena para crear la estructura de una tarjeta Pokémon
    pokemonDiv.innerHTML = `<div class="card-front"><a class="namePokemon">${pokemon.name}</a><div class="card-type">${divType}</div><div class="imgpokemon"><img src="${pokemon.img}" alt=""></div><div><div class="card-back"><div class="card-description"><p>${pokemon.about}</p></div></div>`;
    /* contiene toda la información de la tarjeta Pokémon 
    se agrega como hijo al elemento con el ID pokemonListDiv, inserta en la página web. */
    pokemonListDiv.appendChild(pokemonDiv);

  });
  // Obtén todos los elementos con la clase 'card-type'
  const cardMayusType = document.querySelectorAll('.card-type a');
  // Recorre cada elemento y ajusta el texto para que comience con mayúscula
  cardMayusType.forEach(elementoCard => {
    elementoCard.textContent = functionMayus(elementoCard.textContent);
  });
  // Función para capitalizar la primera letra de una palabra
  function functionMayus(letra) {
    return letra.charAt(0).toUpperCase() + letra.slice(1);
  }

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
