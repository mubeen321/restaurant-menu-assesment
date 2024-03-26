
import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (mealId, mealName) => {
        const existingIndex = favorites.findIndex(fav => fav.id === mealId);
        if (existingIndex !== -1) {
            setFavorites(prevFavorites => prevFavorites.filter((_, index) => index !== existingIndex));
        } else {
            setFavorites(prevFavorites => [...prevFavorites, { id: mealId, name: mealName }]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesContext, FavoritesProvider };
