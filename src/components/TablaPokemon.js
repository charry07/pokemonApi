import React from 'react'


function TablaPokemons(props) {
    return (
        <main className="flexTabla"  onClick={props.onClick}  >
            <div className="cardTabla">
                <img src={props.img} alt="imagenPokemon" className="imagenPokemonTabla"/>
                <p className="id">#{props.id}</p>
                <h1 className="card-nombre-pokemonTabla">
                    {props.name}
                </h1>
            </div>
        </main>
    )
}
export default TablaPokemons

