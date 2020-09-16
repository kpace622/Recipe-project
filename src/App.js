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
      <div className='nav-header'>
        <Navbar />
      </div>

      <Route 
        path='/home'
        render={() => <Slider />}
      />

      <Route 
        path='/findRecipe'
        render={() => <Recipe />}
      />


      <Route 
        path='/addRecipe'
        render={() => <AddRecipe />}
      />
    </div>
  );
}

export default App;
