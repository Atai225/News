import React from 'react'
import { NavLink } from 'react-router-dom'
import './Logo.css'
import logo from './newsguard.svg'

function Logo() {
  return (
	<div className='logo'>
		<NavLink to='/'><img className='logo__img' src={logo} alt="" /></NavLink>
	</div>
  )
}

export default Logo