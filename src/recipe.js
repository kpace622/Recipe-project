import React from 'react';
import RecipeCard from './recipeCard';

const Recipe = ({recipes, setRecipes}) => {

  return (
    <div className='main-container'>
      <div className='recipe-container'>
        {recipes.map(item => {
          return ( 
            <RecipeCard key={item.id} info={item} updateRecipe={setRecipes} recipes={recipes}/>
          )
        })}
      </div>
    </div>
  )
}

export default Recipe;