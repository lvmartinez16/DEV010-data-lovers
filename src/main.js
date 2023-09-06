import { cargarTipo } from './data.js';
import data from './data/pokemon/pokemon.js';

//se obtiene elemn ID listPokemon' que esta en el html
const listPokemon = document.getElementById('listPokemon');
cargaInicial(data, listPokemon);

// Obtén los botones de ordenamiento por ID
const btnAscendente = document.getElementById('ordenAscendente');
const btnDescendente = document.getElementById('ordenDescendente');

// Agrega event listeners a los botones
btnAscendente.addEventListener('click', () => ordenarPokemonAZ());
btnDescendente.addEventListener('click', () => ordenarPokemonZA());

function ordenarPokemonAZ() {
  data.pokemon.sort((a, z) => a.name.localeCompare(z.name));
  cargaInicial(data, listPokemon);
}

function ordenarPokemonZA() {
  data.pokemon.sort((a, b) => b.name.localeCompare(a.name));
  cargaInicial(data, listPokemon);
}

function cargaInicial(dataComplete, pokemonListDiv) {
  const pokemonDivs = dataComplete.pokemon.map(pokemon => {
    let divType = ``;
    pokemon.type.forEach(type => {
      divType += `<a class="type-${type}">${type}</a>`;
    });
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'tarjetaPokemon';
    pokemonDiv.innerHTML =
      `<div class="card-front"><a class="namePokemon">${pokemon.name}</a>
        <div class="card-type">${divType}</div>
        <div class="imgpokemon"><img src="${pokemon.img}" alt=""></div>
        <div><div class="card-back">
        <div class="card-description">
        <p>${pokemon.about}</p></div>
        </div>`;
    return pokemonDiv;
  });

  pokemonListDiv.innerHTML = '';
  pokemonDivs.forEach(pokemonDiv => {
    pokemonListDiv.appendChild(pokemonDiv);
  });
}


window.addEventListener('change', changeSelect);
function changeSelect() {
  const valueFilter = document.getElementById('typeSelector').value;
  //  console.log("value---->>>>", valueFilter);
  if (valueFilter !== 'all') {
    const pokemonFilter = cargarTipo(data, valueFilter);
    listPokemon.innerHTML = '';
    pokemonFilter.forEach(pokemon => {
      let divType = '';
      pokemon.type.forEach(type => {
        divType += `<a class="type-${type}">${type}</a>`;
      });
      const pokemonDiv = document.createElement('div');
      pokemonDiv.className = 'tarjetaPokemon';
      pokemonDiv.innerHTML =
        `<div class="card-front"><a class="namePokemon">${pokemon.name}</a>
        <div class="card-type">${divType}</div>
        <div class="imgpokemon"><img src="${pokemon.img}" alt=""></div>
        <div><div class="card-back">
        <div class="card-description">
        <p>${pokemon.about}</p></div>
        </div>`;
      listPokemon.appendChild(pokemonDiv);
    });
  } else {
    cargaInicial(data, listPokemon);
  }
} cargaInicial(data, listPokemon); // Llama a cargaInicial al cargar la página 



/* BOTON SUBIR */
const scrollToTopButton = document.getElementById("btnVolverArriba");
//este evento scrolltopbutton baje la pagina, muestra el btn
window.onscroll = function () {
  //document.body.scrollTop > 3000 ||
  if (document.documentElement.scrollTop > 1200) {
    //hace qe cuando el usuario hace scroll hacia abajo muestre el boton
    scrollToTopButton.style.display = "block";
  } else { // de lo contrario no lo muestre
    scrollToTopButton.style.display = "none";
  }
};
scrollToTopButton.addEventListener("click", function () { // Hacer scroll suave al inicio cuando se hace clic en el botón
  //document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});