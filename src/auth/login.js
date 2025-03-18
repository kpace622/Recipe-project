import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import {NavLink} from 'react-router-dom';
import {TextField, Button, withStyles} from '@material-ui/core';
import axios from 'axios'

const StyledButton = withStyles({
  root: {
    background:  '#bc6c25'
  }
})(Button)

function Login(props) {
 const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axios.post('https://kp-recipe-project.herokuapp.com/auth/login', credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.jwt_token);
        // props.history.push('/');
      })
  }

  const handleChange = e => {
    setCredentials(e.target.value)
  }

    return (
      <div>
        <form className='login-form' onSubmit={login}>
          <label className='label' for='username'>username:</label>
          <TextField
            className='login-text'
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <br/>
          <label className='label' for='password'>password:</label>
          <TextField
            className='login-text'
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <br/>
          <StyledButton type='submit'>Log in</StyledButton>
          <NavLink className='nav-link sign-up' to='/signup'>Don't have an account? Sign up!</NavLink> 
        </form>
      </div>
    )
}

export default Login
