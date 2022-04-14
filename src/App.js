import './styles/App.css';
import React from 'react';
import Card from './components/Card';
import {useEffect,useState} from 'react';
import { Row } from 'react-bootstrap';
import TablaPokemon from './components/TablaPokemon';
import Pagination from './components/Pagination';




function App() {

  const [pokemonEstado, setPokemonEstado] = useState([]);
  const [pokemonSeleccionadoEstado, setPokemonSeleccionadoEstado] = useState(pokemonEstado);
  const [loading, setLoading] = useState(true)
  const [loadingCard, setLoadingCard] = useState(true)
  const [AbrirCarta, setAbrirCarta] = useState(false);
  const showAbrirCarta = () => setAbrirCarta(!AbrirCarta);
  const [pagina,setPagina] = useState(1);

  


  const getPokemonList = async (min,max) => {
    let pokemonArray = [];
    for(let i = min; i <= max; i ++){
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemonEstado(pokemonArray);
    setLoading(false);
  }

  const next  = async () => {
    let incremento = pagina +1;
    let inicio = pagina*20
    let fin = (pagina*20)+20
    getPokemonList(inicio,fin);
    setPagina(incremento)
    console.log('next' ,  incremento);
  }

  const previous = async () => {
    let decremento = pagina -1;
    let inicio = (decremento*20)-19
    let fin = (decremento*20);
    if(inicio > 0){
      getPokemonList(inicio,fin);
      setPagina(decremento)
      console.log('previous' , decremento);
    }
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
    getPokemonList(1,20);
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
          <Pagination
            next={next}
            previous={previous}
            pagina={pagina}
          />
        </>
      )}
      </header>
    </div>
  );
}


export default App;
