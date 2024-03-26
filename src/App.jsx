
import React, { useState } from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Favorites from './pages/Favorites';
import MealGenerator from './pages/MealGenerator';
import AboutMe from './pages/AboutMe';
import './App.css';
import Dishes from './pages/Dishes';
import { FavoritesProvider } from './FavoriteContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const history = useHistory()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <FavoritesProvider>

        <div className="app">
          <header>

            <div className="hamburger" onClick={toggleSidebar}>
              <div></div>
              <div></div>
              <div></div>
            </div>            <Link to="/" style={{ color: 'white', fontSize: '1em' }}>  <h1 >Store Name</h1></Link>
          </header>

          <div className={` ${isSidebarOpen ? 'sidebar open' : 'noe'}`} >
            <span className='cross' onClick={toggleSidebar}>X</span>
            <nav>
              <ul>
                <li>
                  <Link to="/" onClick={toggleSidebar}>Home</Link>
                </li>
                <li>
                  <Link to="/menu" onClick={toggleSidebar}>Menu</Link>
                </li>
                <li>
                  <Link to="/favorites" onClick={toggleSidebar}>My Favorites</Link>
                </li>
                <li>
                  <Link to="/generator" onClick={toggleSidebar}>Meal Generator</Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleSidebar}>About Me</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content">
            <Switch>
              <Route path="/menu" component={Menu} />

              <Route path="/favorites" component={Favorites} />
              <Route path="/generator" component={MealGenerator} />
              <Route path="/about" component={AboutMe} />
              <Route path="/dishes/:category" component={Dishes} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </FavoritesProvider>

    </BrowserRouter>
  );
}

export default App;
