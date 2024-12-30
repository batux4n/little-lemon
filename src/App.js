<<<<<<< HEAD
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Main from './Main'; // Import the BookingForm component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <div className="logo">
            <img src="logo.png" alt="Little Lemon Logo" />
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>

        {/* Add "learn react" link for testing */}
        <a href="https://reactjs.org">learn react</a>

        {/* Routes for navigation */}
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Home Page */}
          <Route path="/about" element={<div>About Page</div>} /> {/* About Page */}
          <Route path="/menu" element={<div>Menu Page</div>} /> {/* Menu Page */}
          <Route path="/reservations" element={<Main />} /> {/* Reservations Page */}
          <Route path="/order" element={<div>Order Online Page</div>} /> {/* Order Page */}
          <Route path="/login" element={<div>Login Page</div>} /> {/* Login Page */}
        </Routes>

        {/* Other sections */}
        <Highlights />
        <Testimonials />
        <Footer />
      </div>
    </Router>
=======
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
>>>>>>> 8efa3508fcd725cb3dbb4f071088b9ddf0967e87
  );
}

export default App;
