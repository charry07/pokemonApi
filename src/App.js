import './styles/App.css';
import React from 'react';
import Card from './components/Card';
import {useEffect,useState} from 'react';
import { Row } from 'react-bootstrap';
import TablaPokemon from './components/TablaPokemon';


function App() {

  const [pokemonEstado, setPokemonEstdo] = useState([]);
  const [pokemonSeleccionadoEstado, setPokemonSeleccionadoEstado] = useState(pokemonEstado);
  const [loading, setLoading] = useState(true)
  const [loadingCard, setLoadingCard] = useState(true)
  const [AbrirCarta, setAbrirCarta] = useState(false);
  const showAbrirCarta = () => setAbrirCarta(!AbrirCarta);


  const getPokemonList = async () => {
  let pokemonArray = [];
  for(let i = 1; i <= 151; i ++){
    pokemonArray.push(await getPokemonData(i));
  }
  setPokemonEstdo(pokemonArray);
  setLoading(false);
  console.log(pokemonArray);
  // const fs = require('fs');
  // const jsonContent = JSON.stringify(pokemonArray);
  // fs.writeFile("./pokedex.json", jsonContent, 'utf8', function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("The file was saved!");
  // }); 
}
  const handleUpdate = (id) => {
    const pokemonSeleccionadoEstado = pokemonEstado.filter((pokemon) => pokemon.id === id);
    setPokemonSeleccionadoEstado(pokemonSeleccionadoEstado);
    setLoadingCard(false);
    showAbrirCarta();
  }

  const getPokemonData = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemonList();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      {loading ? ( <h1 id="loading">Cargando...</h1>
      ) : (
        <>
          {loadingCard ? ( ''
      ) : (
          <Card
            className={!AbrirCarta ? 'flex active' : 'flex'}
            showAbrirCarta={showAbrirCarta}
            img={pokemonSeleccionadoEstado[0].sprites.other.dream_world.front_default}
            name={pokemonSeleccionadoEstado[0].name}
            hp={pokemonSeleccionadoEstado[0].stats[0].base_stat}
            experiencia={pokemonSeleccionadoEstado[0].base_experience}
            ataque={pokemonSeleccionadoEstado[0].stats[1].base_stat}
            defensa={pokemonSeleccionadoEstado[0].stats[2].base_stat}
            especial={pokemonSeleccionadoEstado[0].stats[3].base_stat}
          />
          )}
          <Row>
            {pokemonEstado.map( data =>(
              <TablaPokemon 
              onClick={() => handleUpdate(data.id)}
              key={data.id}
              id={data.id}
              name={data.name}
              img={data.sprites.other.dream_world.front_default}
              />
            ))}
          </Row>
        </>
      )}
      </header>
    </div>
  );
}


export default App;
