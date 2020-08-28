import React, {useState} from 'react';
import axios from 'axios';

const initialRecipe = {
  recipe: ''
}

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState(initialRecipe)

  const postNewRecipe = newRecipe => {
    axios.post('https://kp-recipe-project.herokuapp.com/recipes/addRecipe', newRecipe)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setRecipeName(initialRecipe)
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newRecipe = {
      recipe: recipeName.recipe
    }
    console.log(newRecipe)
    postNewRecipe(newRecipe)
  }

  const handleChange = e => {
    setRecipeName({ ...recipeName, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a recipe!</h2>
      <label>
        <input 
        type='text'
        value={recipeName.name}
        name='recipe'
        onChange={handleChange}
        />
      </label>
      <button type='submit'>Add recipe</button>
    </form>
  )
}

export default AddRecipe