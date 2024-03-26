
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h4>Welcome to our store!</h4>
      <button className='menu-button btn-wdt'><Link to="/menu">Menu</Link></button>
      <button className='menu-button btn-wdt'> <Link to="/favorites">Favorites</Link></button>
      <button className='menu-button btn-wdt'><Link to="/generator">Random Meals</Link></button>
    </div>
  );
}

export default Home;
