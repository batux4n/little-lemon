// src/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="restauranfood.jpg" alt="Restaurant Food" style={{ width: '25%', borderRadius: '10px' }} />
      </div>
    </section>
  );
}

export default Hero;
