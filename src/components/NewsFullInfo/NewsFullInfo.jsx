import React, {useEffect, useState} from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './NewsFullInfo.css'
import { useDispatch, useSelector } from 'react-redux';
import newsReducer, { getNewsInfo, deleteNews } from '../../store/reducers/news.reducer';
import Modal from '../UI/Modal/Modal.jsx';
import img from '../Slider/userimg.jpg'
import { RiCalendar2Fill, RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import { FaInstagram, FaGithub, FaFacebookF,FaTwitter } from "react-icons/fa";



function NewsFullInfo() {
	const navigate = useNavigate()
	const {id} = useParams();
	const dispatch = useDispatch()
	const newsInfo = useSelector(store => store.news.dataItem);
	const author = useSelector(store => store.auth.profile)
	const [show, setShow] = useState(false);
	const user = useSelector(store => store.auth.user);
	const removeNews = () => {
			dispatch(deleteNews(id.toString())).then(() => {
				navigate('/news')
			})
	}

           
	useEffect(() => {
		dispatch(getNewsInfo(id));
	  }, [dispatch])

  return (

		<div className='newsinfo'>
			<div className='newsinfo__box'><img src={newsInfo?.image?.url} alt={newsInfo?.image?.name} className='newsinfo__img'/>
				<h1 className='newsinfo__title'>{newsInfo.title}</h1>
				<p className='newsinfo__data'><RiCalendar2Fill/> {newsInfo.date}</p>
			</div>
				
				{newsInfo.author ?
					<div className='profile-box'>
						<div className='author-img__box'><img src={newsInfo?.author?.img?.url} alt="" className='author-img'/></div>
						<h2>{newsInfo?.author?.name}</h2>
						<h6>{newsInfo?.author?.profession}</h6>
						<p>{newsInfo?.author?.posts} постов</p>
						<p><a className='mail-link' target="_blank" href='https://mail.google.com'>{newsInfo?.author?.mail}</a></p>
						<div className='socials'>
							<a className='social__fb' href='https://www.facebook.com' rel='noreferrer' target='_blank'><FaFacebookF className='fb'/></a>
							<a className='social__tw' href='https://www.twitter.com/' rel='noreferrer' target='_blank'><FaTwitter className='twt'/></a>
							<a className='social__inst' href='https://www.instagram.com/' rel='noreferrer' target='_blank'><FaInstagram className='inst'/></a>
						</div>
				</div> : 
				<div className='profile-box'>
					<div className='author-img__box'><img src={author?.image?.url} alt="" className='author-img'/></div>
					<h2>{author?.name}</h2>
					<h6>{author?.profession}</h6>
					<p>{author?.posts} постов</p>
					<p><a className='mail-link' target="_blank" href='https://mail.google.com'>{author?.user?.email}</a></p>
					<div className='socials'>
						<a className='social__fb' href='https://www.facebook.com' rel='noreferrer' target='_blank'><FaFacebookF className='fb'/></a>
						<a className='social__tw' href='https://www.twitter.com/' rel='noreferrer' target='_blank'><FaTwitter className='twt'/></a>
						<a className='social__inst' href='https://www.instagram.com/' rel='noreferrer' target='_blank'><FaInstagram className='inst'/></a>
					</div>
				</div> 
				}
				<div className='newsinfo__content'>
						{newsInfo.text}
						{user && 
							<>
							{!newsInfo.author && <div className='newsinfo__actions'>
								<Link className='btn edit-btn btn-primary' to={`/news/editcontent/${id}`}><RiEditLine/> Редактировать</Link>
								<button className='btn btn-danger' onClick={() => setShow(true)}><RiDeleteBinLine/> Удалить</button>
							</div>}
							</>
						}
				</div>

			
			<Modal show={show} close={() => setShow(false)} continued={removeNews}>
				Вы действительно хотите удалить пост?
			</Modal>
		</div>

  )
}

export default NewsFullInfo