import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
      <NavLink className='nav-link' to='findRecipe'>Find a Recipe</NavLink>
      <NavLink className='recipeTitle' to='home'>Recipe Project!</NavLink>
      <NavLink className='nav-link' to='addRecipe'>Add a Recipe</NavLink>
    </div>
  )
}

export default Navbar;