import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <NavLink className='nav-link login-link' to='/login'>Login</NavLink>
    <div className='navbar'>     
      {/* <NavLink className='nav-link' to='/signup'>Sign up</NavLink> */}
      <NavLink className='nav-link' to='/findRecipe'>Find a Recipe</NavLink>
      <NavLink className='recipeTitle' to='/'>Recipe Project!</NavLink>
      <NavLink className='nav-link' to='/addRecipe'>Add a Recipe</NavLink>
    </div>

    </>
  )
}

export default Navbar;