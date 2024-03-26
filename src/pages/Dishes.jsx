import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FavoritesContext } from '../FavoriteContext';

const Dishes = ({ match }) => {
    const [dishes, setDishes] = useState([]);
    const category = match.params.category;
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(response => {
                setDishes(response.data.meals);
            })
            .catch(error => {
                console.error('Error fetching dishes:', error);
            });
    }, [category]);

    const handleCheckboxChange = (mealId, strMeal) => {
        toggleFavorite(mealId, strMeal);
    };

    return (
        <div>
            <h2>{category} Dishes</h2>
            <ul>
                {dishes.map(meal => (
                    <li key={meal.idMeal}>
                        <input
                            type="checkbox"
                            id={meal.idMeal}
                            onChange={() => handleCheckboxChange(meal.idMeal, meal.strMeal)}
                            checked={favorites.some(fav => fav.id === meal.idMeal)}

                        />
                        <label htmlFor={meal.idMeal}>{meal.strMeal}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dishes;
