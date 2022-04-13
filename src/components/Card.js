import React from 'react'
import {useState} from 'react'

function Card(props) {

    const [AbrirCarta, setAbrirCarta] = useState(false);
    const showAbrirCarta = () => setAbrirCarta(!AbrirCarta);
    return (
        <main className={props.className}>
            <p title="Cerrar" className="x" onClick={props.showAbrirCarta}>&times;</p>
            <article className="card">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/960/590/small/abstract-watercolor-texture-wallpaper-background-free-vector.jpg" alt="fondo" className="fondo-card"/>

                <div className="card-body">
                    <img src={props.img} alt="imagenPokemon" className="imagenPokemon"/>
                    <h1 className="card-nombre-pokemon">
                        {props.name}
                        <span> {props.hp}Hp</span>
                    </h1>
                    <p className="card-pokemon-text">{props.experiencia} Exp</p>
                </div>



                <div className="card-footer">
                    <div className="card-footer-social">
                        <h3 className="ataque">{props.ataque}K</h3>
                        <p>Ataque</p>
                    </div>
                    <div className="card-footer-social">
                        <h3 className="especial">{props.especial}K</h3>
                        <p>Especial</p>
                    </div>
                    <div className="card-footer-social">
                        <h3 className="defensa">{props.defensa}K</h3>
                        <p>Defensa</p>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Card
