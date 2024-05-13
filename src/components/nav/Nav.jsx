import React from 'react';
import './nav.css';
import logo from '../../assets/img/kinalLogo.png'

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="logoKinal" />
                <h1 className="navbar-title">Yojhan blog</h1>
                <ul className="navbar-list">
                    <li><a href="#" className="navbar-item">Inicio</a></li>
                    <li><a href="#" className="navbar-item">Acerca de</a></li>
                    <li><a href="#" className="navbar-item">Servicios</a></li>
                    <li><a href="#" className="navbar-item">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;