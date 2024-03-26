import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles.css'

const Header = ({ toggleSidebar }) => {
    return (
        <header>
            <div className="hamburger" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Link to="/" style={{ color: 'white', fontSize: '1em' }}>
                <h1>My Store </h1>
            </Link>
        </header>
    );
}

export default Header;
