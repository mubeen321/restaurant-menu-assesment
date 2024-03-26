
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h4>Welcome to our store!</h4>
      <Link to="/menu"><button className='menu-button btn-wdt'>Menu</button></Link>
      <Link to="/favorites"><button className='menu-button btn-wdt'> Favorites</button></Link>
      <Link to="/generator"> <button className='menu-button btn-wdt'>Random Meals</button></Link>
    </div >
  );
}

export default Home;
