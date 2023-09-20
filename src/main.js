import { cargarTipo, ordenarAZ, ordenarZA } from './data.js';
import data from './data/pokemon/pokemon.js';
//console.log("cantidad tarjetas", data);
//se obtiene elemn ID listPokemon' que esta en el html
const listPokemon = document.getElementById('listPokemon');

function cargaInicial(datA, pokemonListDiv) {
  const pokemonDivs = datA.map(pokemon => {
    let divType = ``;
    pokemon.type.forEach(type => {
      divType += `<a class="type-${type}">${type} </a>`;
    });

    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'tarjetaPokemon';
    pokemonDiv.innerHTML =
      `<div class="card-front"><a class="namePokemon">${pokemon.name}</a><div class="card-type">${divType}</div><div class="imgpokemon"><img src="${pokemon.img}" alt=""></div><div><div class="card-back"><div class="card-description"><p>${pokemon.about}</p> <divclass"generacion"><p class"generacion">Generation: ${pokemon.generation.name}</p></divclass></div></div>`;
    return pokemonDiv;

  });

  pokemonListDiv.innerHTML = '';
  pokemonDivs.forEach(pokemonDiv => {
    pokemonListDiv.appendChild(pokemonDiv);
  });
}
cargaInicial(data.pokemon, listPokemon);
let prueba = [];

window.addEventListener('change', changeSelect);
function changeSelect() {
  const valueFilter = document.getElementById('typeSelector').value;
  //  console.log("value---->>>>", valueFilter);
  if (valueFilter !== 'all') {
    const pokemonFilter = cargarTipo(data.pokemon, valueFilter);
    prueba = pokemonFilter;
    //console.log("cuantos", prueba);
    cargaInicial(pokemonFilter, listPokemon);
    //console.log("filtrado type", cargaInicial);
  } else {
    prueba = []; // Reiniciar la variable prueba
    cargaInicial(data.pokemon, listPokemon);
    //console.log("cargaInicial", cargaInicial);
  }
}

const asc = document.getElementById('asc');
asc.addEventListener('click', () => {
  if (prueba.length === 0) {
    const dataAsc = ordenarAZ(data.pokemon);
    cargaInicial(dataAsc, listPokemon);
    // console.log("filtrado A-Z-1", cargaInicial);
  } else {
    const dataAsc = ordenarAZ(prueba);
    cargaInicial(dataAsc, listPokemon);
    // console.log("filtrado Z-A-2", cargaInicial);
  }
});


const des = document.getElementById('des');
des.addEventListener('click', () => {
  if (prueba.length === 0) {
    const dataDes = ordenarZA(data.pokemon)
    cargaInicial(dataDes, listPokemon);
    //  console.log("filtrado Z-A-1", cargaInicial);
  } else {
    const dataDes = ordenarZA(prueba)
    cargaInicial(dataDes, listPokemon);
    //console.log("filtrado Z-A-2", cargaInicial);
  }
  //  console.log(dataAsc, prueba);
});


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