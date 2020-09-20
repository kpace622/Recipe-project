import React, {useState} from 'react';
import axios from 'axios';
import {TextField, Button, withStyles} from '@material-ui/core';

const initialForm = {
  recipe: '',
  instructions: '',
  ingredients: ''
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
      <label className='label' for='recipe'>Recipe Name:</label>
        <TextField 
        type='text'
        value={formValue.recipe}
        name='recipe'
        onChange={handleChange}
        required
        />
        <br/>

      <label className='label' for='instructions'>Recipe Directions:</label>
        <TextField
        multiline
        rows={1}
        max-rows={10}
        type='text'
        value={formValue.instructions}
        name='instructions'
        onChange={handleChange}
        />
        <br/>

        <label className='label' for='ingredients'>Recipe Ingredients:</label>
        <TextField
        multiline
        rows={1}
        max-rows={10}
        type='text'
        value={formValue.ingredients}
        name='ingredients'
        onChange={handleChange}
        />
        <br/>
      
      <StyledButton variant='contained' type='submit'>Add recipe</StyledButton>
    </form>
  )
}

export default AddRecipe