import React from 'react';

const RecipeCard = ({info}) => {

  return (
    <div className='recipe'>
      <h1>{info.recipe}</h1>
    </div>
  )
}

export default RecipeCard