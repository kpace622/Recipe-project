import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import RecipeCard from './recipeCard';

const Recipe = () => {
  const [ recipes, setRecipes ] = useState([]);

  useEffect(() => {
    Axios
      .get('https://kp-recipe-project.herokuapp.com/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='main-container'>
      <div className='recipe-container'>
        {recipes.map(item => {
          return (
            <RecipeCard info={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default Recipe;