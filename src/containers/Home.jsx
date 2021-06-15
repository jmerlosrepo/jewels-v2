import React, { Component } from 'react';


class Home extends Component {
    render(){
        return(
            <div className="heroContainer">
            <div className="hero"></div>
            <div className="heroContent">
                <h1>Bienvenid@</h1>
                <p>Te presentamos nuestro catalogo de productos, en el podras encontrar gran variedad de joyas, cadenas, pulseras, anillos, etc.</p>
                <p>A traves de este catalogo podras enviarnos una lista de productos de los cuales quieras hacer una cotizacion, ya que estos son fabricados a mano por nuestros habiles joyeros, contamos con algo de stock en algunos productos, pero tambien puedes pedir la personalizacion de algun diseno.</p>
                <p>Por ejemplo puedes pedirnos fabricar alguna pieza de plata en oro, pedir alguna longitud especial de una cadena, o que en lugar de brillantes se usen circonias en un anillo.</p>
                <p>Nuestra mision es complacerte y que rrecibas productos de calidad, si no encuentras algun diseno que te guste o si tienes un diseno propio puedes ponerte en contacto con nostros, en la seccion de contacto puedes encontrar nuestros telefonos, correo y redes sociales.</p>
            </div>
            </div>
        );
    }
}

export default Home;