
import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoriteContext';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log('favourite', favorites)
  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favorites.map(meal => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
