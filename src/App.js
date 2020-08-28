import React from 'react';
import './App.css';
import Recipe from './recipe'
import Navbar from './navbar';
import AddRecipe from './addRecipe';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route >
        <Navbar/>
      </Route>

      <Route >
        <Recipe />
      </Route>

      <AddRecipe />
    </div>
  );
}

export default App;
