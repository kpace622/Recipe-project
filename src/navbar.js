import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
      <Link className='nav-link' to='findRecipe'>Find a Recipe</Link>
      <h1 className='recipeTitle'>Recipe Project!</h1>
      <Link className='nav-link' to='addRecipe'>Add a Recipe</Link>
    </div>
  )
}

export default Navbar;