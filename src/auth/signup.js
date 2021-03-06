import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import {TextField, Button, withStyles} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const StyledButton = withStyles({
  root: {
    background:  '#bc6c25'
  }
})(Button)

function Login(props) {
 const [credentials, setCredentials] = useState({});

  const register = e => {
    e.preventDefault();
    axios.post('https://kp-recipe-project.herokuapp.com/auth/register', credentials)
      // .then(res => {
      //   localStorage.setItem('token', res.data.token);
      //   // props.history.push('/');
      // })
      .then(res => {
        console.log(res)
      })
  }

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form className='login-form' onSubmit={register}>
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
        <StyledButton type='submit'>Sign Up</StyledButton>
        <NavLink className='nav-link sign-up' to='/login'>Already have an account? Login!</NavLink> 
      </form>
    </div>
  )
}

export default Login