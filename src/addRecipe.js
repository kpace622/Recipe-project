import React, {useState} from 'react';
import axios from 'axios';

const initialForm = {
  recipe: ''
}

const AddRecipe = () => {
  const [formValue, setFormValue] = useState(initialForm)

  const postNewRecipe = newRecipe => {
    axios.post('https://kp-recipe-project.herokuapp.com/recipes/addRecipe', newRecipe)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newRecipe = {
      recipe: formValue.recipe
    }
    console.log(newRecipe)
    postNewRecipe(newRecipe)
    setFormValue(initialForm)
  }

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a recipe!</h2>
      <label>
        <input 
        type='text'
        value={formValue.recipe}
        name='recipe'
        onChange={handleChange}
        />
      </label>
      <button type='submit'>Add recipe</button>
    </form>
  )
}

export default AddRecipe