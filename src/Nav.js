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
