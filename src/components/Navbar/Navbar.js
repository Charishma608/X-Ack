import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>X-ACK</h1>
      </div>
      <div className="navbar-center">
        <div className="navbar-item" onClick={() => toggleDropdown('about')}>
          <a href="#about">About Us</a>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="navbar-item" onClick={() => toggleDropdown('community')}>
          <a href="#community">Community</a>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="navbar-item" onClick={() => toggleDropdown('blog')}>
          <a href="#blog">Blog</a>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="navbar-item" onClick={() => toggleDropdown('contact')}>
          <a href="#contact">Contact</a>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="navbar-item" onClick={() => toggleDropdown('other')}>
          <a href="#other">Other</a>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#login">Log in</a>
        <button><a href="#signup">Sign up</a></button>
      </div>
    </nav>
  );
};

export default Navbar;
