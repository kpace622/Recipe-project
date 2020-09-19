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
          </div>
        )
      })}
    </div>
  )
}

export default RecipeInfo;