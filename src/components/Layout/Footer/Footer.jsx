import React from 'react'
import {nav} from '../../../data/nav'
import {NavLink, useLocation} from 'react-router-dom'
import './Footer.css';
import { FaInstagram, FaGithub, FaFacebookF,FaTwitter } from "react-icons/fa";
import cn from 'classnames'


function Footer() {
	const location = useLocation();

  return (
	<footer className='footer'>
		<div className='footer__nav'>
			<h4>Навигация по сайту</h4>
			{
				nav.map(link => {
					return <NavLink className={cn("navlink" , {
						actived: location.pathname === link.href
					})} key= {link.id} to={link.href}>{link.name}</NavLink>
				})
			}
		</div>
		<div className='social-media'>
			<h4>Социальные сети</h4>
			{/* <a href='https://www.instagram.com/' rel='noreferrer' target='_blank'><img className='icon first-icon' src={inst} alt="" /></a>
			<a href='https://www.twitter.com/' rel='noreferrer' target='_blank'><img className='icon' src={twitter} alt="" /></a>
			<a href='https://www.facebook.com' rel='noreferrer' target='_blank'><img className='icon' src={facebook} alt="" /></a> */}
			<ul class="wrapper">
				<li class="icon facebook">
					<span class="tooltip">Facebook</span>
					<a href='https://www.facebook.com' rel='noreferrer' target='_blank'><FaFacebookF className='fb'/></a>
				</li>
				<li class="icon twitter">
					<span class="tooltip">Twitter</span>
					<a href='https://www.twitter.com/' rel='noreferrer' target='_blank'><FaTwitter className='twt'/></a>
				</li>
				<li class="icon instagram">
					<span class="tooltip">Instagram</span>
					<a href='https://www.instagram.com/' rel='noreferrer' target='_blank'><FaInstagram className='inst'/></a>
				</li>
				<li class="icon github">
					<span class="tooltip">Github</span>
					<a href='https://www.github.com/' rel='noreferrer' target='_blank'><FaGithub className='git'/></a>
				</li>
			</ul>
		
		</div>
		<div className='contacts'>
			<h4>Контактная информация</h4>
			<ul>
			<li><a href="tel:+8(800)500-05-22" className='link'>+8 (800) 500-05-22</a></li>
			<li><a href="tel:+8(800)500-05-22" className='link'>+8 (800) 500-33-31</a></li>
			<li><a href='https://mail.google.com/mail' className='link'>someone@gmail.com</a></li>
			<li><a href='#' className='link'>Москва, Ленинский проспект</a></li>
			</ul>
		</div>
	</footer>
  )
}

export default Footer