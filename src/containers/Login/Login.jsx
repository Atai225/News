import './Login.css'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchUser, getProfile} from '../../store/reducers/auth.reducer'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    identifier: '',
    password: ''
  });
   const navigate = useNavigate()
  const dispatch = useDispatch()

  const changeHandler = e => {
    setUser(user => {
      return {
        ...user,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitHandler = e => {
    e.preventDefault();
    dispatch(fetchUser(user));
    dispatch(getProfile());
    navigate('/');
  }


  return (
    <div className="container sign-container">
        <h1 className='login__title'>Sign in</h1>
    <form onSubmit={submitHandler} className='form-group'>
        <input  onChange={changeHandler} name='identifier' className='form-style' type="email" placeholder="Email" />
        <input  onChange={changeHandler} name='password' className='form-style' type="password" placeholder="Password" />
        <button className='sign-btn'>Sign In</button>
    </form>
</div>

)
}

export default Login