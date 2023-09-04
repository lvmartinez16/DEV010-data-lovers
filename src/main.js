import { cargaInicial, cargarTipo } from './data.js';
import data from './data/pokemon/pokemon.js';

//se crea una const llamada pokemkonListDiv obteniendo el elemento id 
//del documento llamado 'listPokemon' que esta en el html

const listPokemon = document.getElementById('listPokemon');
cargaInicial(data, listPokemon);



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
  //console.log("value---->>>>", valueFilter.value);
  if (valueFilter.value !== 'all') {
    cargarTipo(listPokemon, valueFilter);
  } else { // es igual a all ,se ejecuta la funcion inicial que no tiene filtros
    cargaInicial(data, listPokemon);
  }
}
