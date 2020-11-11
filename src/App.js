import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './recipe'
import Navbar from './navbar';
import AddRecipe from './addRecipe';
import { Route } from 'react-router-dom';
import Slider from './slider';
import RecipeInfo from './recipeInfo';
import Login from './auth/login';
import Signup from './auth/signup';
import Axios from 'axios';

function App() {
  const [ recipes, setRecipes ] = useState([]);

  useEffect(() => {
    Axios
      .get('https://kp-recipe-project.herokuapp.com/recipes')
      .then(response => {    
        setRecipes(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div className="App">
        <div className='nav-header'>
          <Navbar />
        </div>

        <Route 
          exact path  ='/'
          render={() => <Slider />}
        />

        <Route 
          path='/findRecipe'
          render={() => <Recipe recipes={recipes} setRecipes={setRecipes}/>}
        />

        <Route
          path='/recipeInfo/:id'
          render={() => <RecipeInfo recipes={recipes} />}
        />

        <Route 
          path='/addRecipe'
          render={() => <AddRecipe />}
        />
        <Route
          path='/login'
          render={() => <Login />}
        />

        <Route
          path='/signup'
          render={() => <Signup />}
        />
      </div>
    </div>
  );
}

export default App;
