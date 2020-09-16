import React, {useState} from 'react';
import axios from 'axios';
import {TextField, Button, withStyles} from '@material-ui/core';

const initialForm = {
  recipe: ''
}

const StyledButton = withStyles({
  root: {
    background:  '#bc6c25'
  }
})(Button)

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
    <form className='add-form' onSubmit={handleSubmit}>
      <h2>Add a recipe!</h2>
      <label>
        <TextField 
        type='text'
        value={formValue.recipe}
        name='recipe'
        onChange={handleChange}
        required
        />
      </label>
      <StyledButton variant='contained' type='submit'>Add recipe</StyledButton>
    </form>
  )
}

export default AddRecipe