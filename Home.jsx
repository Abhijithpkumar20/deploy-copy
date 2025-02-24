import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/signup'>Signup</Link></li>          <li><a href="#">About Us</a></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <header className="home-header">
        <h1>Welcome to FoodExpress</h1>
        <p>Delicious meals delivered to your doorstep</p>
      </header>
      <section className="menu-section">
        <h2>Our Popular Dishes</h2>
        <div className="menu-items">
          <div className="menu-item">Pizza</div>
          <div className="menu-item">Burger</div>
          <div className="menu-item">Pasta</div>
          <div className="menu-item">Sushi</div>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2025 FoodExpress. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
