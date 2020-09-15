import React from 'react';
import './App.css';
import Recipe from './recipe'
import Navbar from './navbar';
import AddRecipe from './addRecipe';
import { Route } from 'react-router-dom';
import Slider from './slider';


function App() {
  return (
    <div className="App">
      <Route >
        <div className='nav-header'>
          <Navbar/>
        </div>
      </Route>

      <Route >
        <Recipe />
        <Slider />
      </Route>

      <AddRecipe />
    </div>
  );
}

export default App;
