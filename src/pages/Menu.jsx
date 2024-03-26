
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css'

const Menu = ({ history }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleCategorySelect = (category) => {

        history.push(`/dishes/${category}`);
    };

    return (
        <div >
            <h2>Menu</h2>
            <div >
                <ul className='container'>
                    {categories.map(category => (
                        <li key={category.strCategory} className='list-no-style '>
                            <button onClick={() => handleCategorySelect(category.strCategory)} className='menu-button btn-wdt'>
                                {category.strCategory}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Menu;
