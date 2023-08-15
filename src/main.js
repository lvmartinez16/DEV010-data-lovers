import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


console.log("data->", data);
const pokemonListDiv = document.getElementById('listPokemon');

// Usa el método map() para crear un div para cada objeto de Pokémon
const pokemonDivs = data.pokemon.map(pokemon => {
    //console.log(pokemon);
    let divType =``;
    pokemon.type.map(type => {
        divType += `<a class="type-${type}">${type}</a>`;
    });
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'tarjetaPokemon';
    pokemonDiv.innerHTML = `<div class="card-front"><a class="namePokemon">${pokemon.name}</a><div class="card-type">${divType}</div><div class="imgpokemon"><img src="${pokemon.img}" alt=""></div><div><div class="card-back"></div>`;
    return pokemonDiv;
});

// Agrega cada div de Pokémon al div principal en el DOM
console.log("divs ->", pokemonDivs);
pokemonDivs.forEach(pokemonDiv => {
    pokemonListDiv.appendChild(pokemonDiv);
});
