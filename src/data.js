export const cargarTipo = (data, valueFilter) => {
  const typeFilter = data.filter(type => type.type.includes(valueFilter));
  return typeFilter;

};
export const tiposKanto = (data) => {
  const tiposPoke = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];

  const resultado = {};
  tiposPoke.forEach(tipo => {
    // Filtramos los Pokémon de tipo "tipo" que son de la generación "Kanto".
    const filteredPokemon = data.pokemon.filter(pokemon => pokemon.type.includes(tipo) && pokemon.generation.name.includes('kanto'));
    // Almacenamos la cantidad de Pokémon en el objeto resultado bajo la clave del tipo actual.
    resultado[tipo] = filteredPokemon.length;
  });

  return resultado;
}


export const ordenarAZ = (data) => {
  const ordenar = data.sort((a, z) => a.name.localeCompare(z.name));
  return ordenar;
}

export const ordenarZA = (data) => {
  const ordenar = data.sort((a, z) => z.name.localeCompare(a.name));
  return ordenar;
}
