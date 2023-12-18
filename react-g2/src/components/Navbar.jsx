// Navbar.js
import React from 'react';
import logoImage from '../assets/montain.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><img src={logoImage} alt="logo" className="logo-image"/></div>
        <ul className="navbar-menu">
          <li className="navbar-item">Mon profil
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
