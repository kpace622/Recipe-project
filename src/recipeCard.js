import React from 'react';
import axios from 'axios';

const RecipeCard = ({info}) => {

  const handleUpdate = () => {
    
  }

  const handleDelete = recipe => {
    console.log("button clicked")
    axios.delete(`https://kp-recipe-project.herokuapp.com/recipes/${recipe.id}`)
      .then(res => {
        console.log('recipe deleted')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='recipe'>
      <h1>{info.recipe}</h1>
      <div className='recipe-buttons'> 
        <button onClick={handleUpdate}>Edit recipe</button>
        <button onClick={() => handleDelete(info)}>Delete Recipe</button>
      </div>
    </div>
  )
}

export default RecipeCard