import React from "react";
import "./Navbar.css";
import pet from '../../assets/pet.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={pet} alt="Awanthi Malawanage" className="Pet Shop Logo" />
        
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home"  >
            Home
          </a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="language-dropdown">
          <span>English ▼</span>
        </div>
        <div className="navbar-icons">
           
          <span className="icon">👤</span>
          <span className="icon">🛒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
