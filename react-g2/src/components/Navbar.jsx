import React from 'react';
import logoImage from '../assets/montain.png';
import logoProfile from '../assets/profile-user.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"><img src={logoImage} alt="logo" className="logo-image" /></a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/profile" className='profile'><img src={logoProfile} alt="logo" className="logo-profile" /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
