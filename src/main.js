import { cargaInicial, cargarTipo } from './data.js';
import data from './data/pokemon/pokemon.js';

//se crea una const llamada pokemkonListDiv obteniendo el elemento id del docuemnto llamado 'listPokemon' que esta en el html
const pokemonListDiv = document.getElementById('listPokemon');
cargaInicial(data, pokemonListDiv);

// Obtén todos los elementos con la clase 'card-type'
const cardMayusType = document.querySelectorAll('.card-type a');
// Recorre cada elemento y ajusta el texto para que comience con mayúscula
cardMayusType.forEach(elementoCard => {
  elementoCard.textContent =functionMayus(elementoCard.textContent);
});

// Función para capitalizar la primera letra de una palabra
function functionMayus(letra) {
  return letra.charAt(0).toUpperCase() + letra.slice(1);
}

window.addEventListener('change', changeSelect);

function changeSelect() {
  const valueFilter = document.getElementById('typeSelector');
  //console.log("value---->>>>", valueFilter.value);
  if (valueFilter.value !== 'all') {
    cargarTipo(pokemonListDiv, valueFilter);
  } else { // es igual a all ,se ejecuta la funcion inicial que no tiene filtros
    cargaInicial(data, pokemonListDiv);
  }
}

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