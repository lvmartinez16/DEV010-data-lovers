import { cargaInicial, cargarTipo } from './data.js';
import data from './data/pokemon/pokemon.js';

//se crea una const llamada pokemkonListDiv obteniendo el elemento id del docuemnto llamado 'listPokemon' que esta en el html
const pokemonListDiv = document.getElementById('listPokemon');
cargaInicial(data, pokemonListDiv);

window.addEventListener('change', changeSelect);


function changeSelect() {
  let valueFilter = document.getElementById('typeSelector');
  //console.log("value---->>>>", valueFilter.value);
  if (valueFilter.value != 'all') {
    cargarTipo(pokemonListDiv, valueFilter);
  } else { // es igual a all ,se ejecuta la funcion inicial que no tiene filtros
    cargaInicial(data, pokemonListDiv);
  }
}


//se obteniendo el elemento btnVolverArriba del documento html
//este evento scroll se ejecutara cada vez que el usuasrio baje la pagina, muestra el btn
const scrollToTopButton = document.getElementById("btnVolverArriba");
//este evento scroll se ejecutara cada vez que el usuasrio baje la pagina, muestra el btn
window.onscroll = function () {
  //document.body.scrollTop > 3000 ||
  if (document.documentElement.scrollTop > 1200) {
    //hace qe cuando el usuario hace scroll hacia abajo muestre el boton
    scrollToTopButton.style.display = "block";
  } else {
    // de lo contrario no lo muestre
    scrollToTopButton.style.display = "none";
  }
};

// Hacer scroll suave al inicio cuando se hace clic en el botón
scrollToTopButton.addEventListener("click", function () {
  //document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});