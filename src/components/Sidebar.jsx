import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={` ${isSidebarOpen ? 'sidebar open' : 'noe'}`}>
            <span className='cross' onClick={toggleSidebar}>X</span>
            <nav>
                <ul>
                    <Link to="/" onClick={toggleSidebar}>

                        <li>
                            Home
                        </li>
                    </Link>
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
    );
}

export default Sidebar;
