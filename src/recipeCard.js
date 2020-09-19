import React, {useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


const initialRecipe = {
  recipe: ''
};

const RecipeCard = ({info, updateRecipe, recipes}) => {
  const [editRecipe, setEditRecipe] = useState(initialRecipe)
  const [editing, setEditing] = useState(false)

  const saveEdit = e => {
    e.preventDefault();
    axios.put(`https://kp-recipe-project.herokuapp.com/recipes/${editRecipe.id}`, editRecipe)
    .then(res => {
      updateRecipe([
        ...recipes.filter(recipe => recipe.id !== editRecipe.id),
        res.data
      ])
      setEditing(false)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleUpdate = recipe => {
    setEditing(true);
    setEditRecipe(recipe)
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
      <NavLink to={`/recipeInfo/${info.id}`} >
        <h1>{info.recipe}</h1>
      </NavLink>
      <div className='recipe-buttons'> 
        <button onClick={() => handleUpdate(info)}>Edit recipe</button>
        <button onClick={() => handleDelete(info)}>Delete Recipe</button>
      </div>

      {editing && (
        <form onSubmit={saveEdit}>
          <label>
            Recipe Name:
            <input
              onChange={e => setEditRecipe({ ...editRecipe, recipe: e.target.value})}
              value={editRecipe.recipe}
            />
          </label>
          <div>
            <button type='submit'>Save changes</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default RecipeCard