
import data from './data/pokemon/pokemon.js';
export const cargarTipo = (data, comboFiltro) => {
  // let comboFiltro = document.getElementById('numberSelector', valueNumber);
  const typeFilter = data.pokemon.filter(type => type.type.includes(comboFiltro));
  return typeFilter;
};
export const ordenarPokemonAZ=()=>{
  const ordenar = data.pokemon.sort((a, b) => b.name.localeCompare(a.name));
  return ordenar;
}