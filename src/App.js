import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Main from './Main'; // Import the Main component
import Header from './Header'; // Import Header component
import Nav from './Nav'; // Import Nav component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header and Navigation Bar */}
        <Header />
        <Nav />

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
  );
}

export default App;
