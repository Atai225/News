import React from 'react'
import {nav} from '../../../data/nav'
import {NavLink, useLocation} from 'react-router-dom'
import styles from './Navigation.module.css'
import NavBtn from '../NavBtn/NavBtn';
import cn from 'classnames'

function Navigation() {
	const location = useLocation();

  return 	(
	<>	
		<div className={styles.nav}>
			{
				nav.map(link => {
					return <NavLink className={cn("nav__link" , {
						active: location.pathname === link.href
					})} key= {link.id} to={link.href}>{link.name}</NavLink>
				})
			}
			<span className={styles.separator}></span>
			<NavBtn/>
		</div>
		<style jsx>{`
			.nav__link{
				color: #434343;
				font-size: 17px;
				margin-right: 2rem;
				text-decoration: none;
				padding: 0 0.5rem;
			}

			
			.nav__link:hover{
				color: black;
				font-weight: 500;
			}
			.nav__link.active{
				color: black;
				font-weight: 500;
				border-bottom: 3px solid blue;
				border-bottom-left-radius: 3px;
				border-bottom-right-radius: 3px;
			}

		`}</style>
	
	</>
	)
}

export default Navigation