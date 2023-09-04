import {  cargaInicial,cargarTipo } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log("ARRAY",data);
//se crea una const llamada pokemkonListDiv obteniendo el elemento id 
//del documento llamado 'listPokemon' que esta en el html
const listPokemon = document.getElementById('listPokemon');
console.log("crea el div donde van las tarjetas", listPokemon);
//cargaInicial(data);

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


window.addEventListener('change', changeSelect);

function changeSelect() {
  const valueFilter = document.getElementById('typeSelector');
  console.log("value---->>>>", valueFilter.value);
  if (valueFilter.value !== 'all') {
    const pokemonFilter = cargarTipo(data, valueFilter.value);
    listPokemon.innerHTML = ''; //borra todo el contenido dentro del elemento DIV-lisPokemon
    pokemonFilter.forEach(pokemon => { // recorre cada elemento en el arreglo pokemons.
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
  } else { // es igual a all ,se ejecuta la funcion inicial que no tiene filtros
    cargaInicial(data, listPokemon);
  }
} 