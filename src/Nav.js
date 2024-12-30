<<<<<<< HEAD
// src/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';  // Link import

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src="/logo.png" alt="Little Lemon Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
=======
function Nav() {
    return (
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  
>>>>>>> 8efa3508fcd725cb3dbb4f071088b9ddf0967e87
