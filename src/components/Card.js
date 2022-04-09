import React from 'react'

function Card() {
    return (
        <main className="flex">
            <article className="card">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/960/590/small/abstract-watercolor-texture-wallpaper-background-free-vector.jpg" alt="fondo" className="fondo-card"/>

                <div className="card-body">
                    <img src="" alt="imagenPokemon" className="imagenPokemon"/>
                    <h1 className="card-nombre-pokemon">
                        Charry
                    </h1>
                    <p className="card-pokemon-text">Guarne</p>
                </div>



                <div className="card-footer">
                    <div className="card-footer-social">
                        <h3 className="ataque">80K</h3>
                        <p>Ataque</p>
                    </div>
                    <div className="card-footer-social">
                        <h3 className="especial">803K</h3>
                        <p>Especial</p>
                    </div>
                    <div className="card-footer-social">
                        <h3 className="defensa">1.4K</h3>
                        <p>Defensa</p>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Card
