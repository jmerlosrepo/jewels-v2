import React, { Component } from 'react';
import { socialNetworks, phoneNumbers } from '../constants/social';

class Contact extends Component {
    render(){
        return(
            <div className="contactContainer">
                <div className="cardTemplate roundedCorner contactBorder">
                    <h1 className="cardHeader toolsBackgorund">Contacto</h1>
                    <div className="contactBody">
                        <p>Siguenos en nuestra redes sociales, mandanos un mail o llamanos por telefono o WhatsApp.</p>
                        <p>Con gusto te atenderemos y resolveremos todas tus dudas, hacemos disenos a medida, mejoramos presupuestos.</p>
                        <div className="listaContacto">
                            <div className="redes">
                                <h4>Nuestras redes sociales</h4>
                                <ul>
                                    <li>
                                        <i className="fa fa-facebook-official facebook-blue" aria-hidden="true"></i>
                                        <a rel="noreferrer" target="_blank" href={`https://www.facebook.com/${socialNetworks.facebook}`} className="socialNetwork">{socialNetworks.facebook}</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-instagram instagram-red" aria-hidden="true"></i>
                                        <a rel="noreferrer" target="_blank" href={`https://www.instagram.com/${socialNetworks.instagram}`} className="socialNetwork">{socialNetworks.instagram}</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-twitter twitter-blue" aria-hidden="true"></i>
                                        <a rel="noreferrer" target="_blank" href={`https://www.twitter.com/${socialNetworks.twitter}`} className="socialNetwork">{socialNetworks.twitter}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="telefonos">
                                <h4>Llamanos o mandanos un Whats    </h4>
                                <ul>
                                    <li>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        {phoneNumbers.calls.map(call => <span key={call} className="phoneNumbers">{call}</span>)}
                                    </li>
                                    <li>
                                        <i className="fa fa-whatsapp whatsApp-green" aria-hidden="true"></i>
                                        {phoneNumbers.whatsApp.map(whats => <span key={whats} className="phoneNumbers">{whats}</span>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;