import React from 'react';
import './nav.css';
import logo from '../../assets/img/kinalLogo.png'
import { Dashboard } from '../../pages/dashboard/Dashboard';

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="logoKinal" />
                <h1 className="navbar-title">Yojhan blog</h1>
                <ul className="navbar-list">
                    <li><a href="#" className="navbar-item" onClick={() => window.location.href = '/dashboard'}>Inicio</a></li>
                    <li><a href="#" className="navbar-item">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;