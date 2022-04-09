import './styles/App.css';
import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card/>
      </header>
    </div>
  );
}
const getRandomPokemon = () => {
  return Math.floor(Math.random() * 201) + 1;
}
document.addEventListener('DOMContentLoaded', () => {
  fetchPokemon();
});

const fetchPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomPokemon()}`);
    const data = await response.json();
    const pokemon = {
      img: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      hp: data.stats[0].base_stat,
      experiencia: data.base_experience,
      ataque: data.stats[1].base_stat,
      especial: data.stats[3].base_stat,
      defensa: data.stats[2].base_stat,
      
    }
    pintarCard(pokemon);
  }
  catch (error) {
    console.log(error);
  }
}

const pintarCard = (pokemon) => {
  const flex = document.querySelector('.flex')
  flex.querySelector('.imagenPokemon').setAttribute('src', pokemon.img);
  flex.querySelector('.card-nombre-pokemon').innerHTML = `${pokemon.nombre}  <span>${pokemon.hp}Hp</span>`;
  flex.querySelector('.card-pokemon-text').innerHTML = `${pokemon.experiencia} Exp`;

  flex.querySelector('.ataque').innerHTML = `${pokemon.experiencia} K`;
  flex.querySelector('.especial').innerHTML = `${pokemon.especial} K`;
  flex.querySelector('.defensa').innerHTML = `${pokemon.defensa} K`;

}


export default App;
