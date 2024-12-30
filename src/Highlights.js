// src/Highlights.js
import React from 'react';

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="food-items">
        <div className="food-item">
          <img src="greek-salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <span className="price">$12.99</span>
          <p>A fresh and healthy Mediterranean classic.</p>
          <button>Order a delivery</button>
        </div>
        <div className="food-item">
          <img src="bruschetta.jpg" alt="Bruchetta" />
          <h3>Bruchetta</h3>
          <span className="price">$9.99</span>
          <p>Freshly baked bread topped with tomato and basil.</p>
          <button>Order a delivery</button>
        </div>
        <div className="food-item">
          <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <span className="price">$7.99</span>
          <p>A tangy, sweet treat to end your meal.</p>
          <button>Order a delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
