import React from 'react';
import {
    Link
  } from "react-router-dom";

const NavBar = ({language, languageFields, selectedJewelsCount, onLanguageChange}) => {
    return (
        <nav className="navigation">
            <Link className="navBarLogo" to="/">{languageFields.pageTitleButton}</Link>
            <ul className="navBarButtons">
                <li>
                   <Link className="nvButton" to="/">{languageFields.homeButton}</Link>
                </li>
                <li>
                   <Link className="nvButton" to="/catalogue">{languageFields.catalogueButton}</Link>
                </li>
                <li>
                   <Link className="nvButton" to="/contact">{languageFields.contactButton}</Link>
                </li>
            </ul>
            <ul className="navBarRightButtons">
                <li>
                   <Link to="/cart" className="cartButton"><i className="fa fa-shopping-cart" ></i> ({selectedJewelsCount})</Link>
                </li>
                <li>
                    <a className="cartButton" onClick={(e) => onLanguageChange(e, language)} href="#/">{language}</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;