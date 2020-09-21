import React from 'react';
import {useParams} from 'react-router-dom';

const RecipeInfo = ({recipes }) => {
  const params = useParams()

  const filter = recipes.filter(item => item.id == params.id)

  return (
    <div>
      {filter.map(item => {
        return (
          <div className='recipe-info'>
            <h1>{item.recipe}</h1>
            <hr/>
            <h2>Ingredients needed</h2>
            <h3>{item.ingredients}</h3>
            <h2>Instructions</h2>
            <h3>{item.instructions}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeInfo;