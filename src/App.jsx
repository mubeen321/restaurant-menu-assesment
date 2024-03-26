
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { FavoritesProvider } from './FavoriteContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/header';
import Content from './components/Content';


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

          <Header toggleSidebar={toggleSidebar} />
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Content />
        </div>
      </FavoritesProvider>

    </BrowserRouter>
  );
}

export default App;
