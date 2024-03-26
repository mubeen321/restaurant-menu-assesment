
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MealGenerator() {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        setRandomMeal(response.data.meals[0]);
      })
      .catch(error => {
        console.error('Error fetching random meal:', error);
      });
  }, [])

  return (
    <div>
      <h2>Random Meal Generator</h2>
      {randomMeal && (
        <div>
          <h3>{randomMeal.strMeal}</h3>
          <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
        </div>
      )}
    </div>
  );
}

export default MealGenerator;
