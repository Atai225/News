import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom'
import './NavBtn.css';
import { cleanUser } from '../../../store/reducers/auth.reducer';
import Avatar from '@mui/material/Avatar';
import {Dropdown} from 'react-bootstrap'
import './NavBtn.css'

function NavBtn() {
	const profile = useSelector(store => store.auth.profile)
	const user = useSelector(store => store.auth.user)
	const dispatch = useDispatch()

	const logout = () => {
		dispatch(cleanUser())
	}

  return (
	<div className='nav'>
		{!user ? <NavLink className='nav__btn' to="/login">Войти</NavLink> : <Dropdown>
			<Dropdown.Toggle  id="dropdown-basic" style={{display: 'flex', alignItems: 'center', background: 'none', border: 'none', color: 'black' }}>
  				<Avatar alt="user" src={profile?.image?.url} />
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item className='dropdown-item'><Link style={{textDecoration: 'none', color: 'black'}} to='/profile'>Профиль</Link></Dropdown.Item>
				<Dropdown.Item className='dropdown-item'><Link style={{textDecoration: 'none', color: 'black'}} to='/addnews'>Добавить новость</Link></Dropdown.Item>
				<Dropdown.Item className='dropdown-item'><button className='dropdown-btn' onClick={logout}>Выйти</button></Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>}
	
	
	</div>
  )
}

export default NavBtn