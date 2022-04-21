import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getNews} from '../../store/reducers/news.reducer'
import {Link, useNavigate} from 'react-router-dom';
import './NewsItem.css'

import { RiCalendar2Fill } from "react-icons/ri";



function NewsItem() {
	const newss = useSelector(store => store.news.data)
	const dispatch = useDispatch();
	const nav = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const [newsPerPage] = useState(3)

	const lastNewsIndex = currentPage * newsPerPage;
	const firstNewsIndex = lastNewsIndex - newsPerPage;
	const currentNews = newss.slice(firstNewsIndex, lastNewsIndex);
	
	
	useEffect(() => {
		dispatch(getNews());
	}, [dispatch]);

  return (
	<>
		<div className='main-news'>
		{
			currentNews.map(news => {
				return <div className='news-item' key={news.id}>
						<img src={news.image.url} className='news-item__img' alt={news.title} />
						<div className='news-item__info'>
							<h3 className='news-item__title'>{news.title}</h3>
							<p className='news-item__text'>{news.description}</p>
						</div>
						<div className='news-item__footer'>
							<p className='news-item__data'><RiCalendar2Fill/>  {news.date}</p>
							<Link to={`/news/${news.id}`} className='btn btn-primary'>Подробнее</Link>
						</div>
					</div>
				})
			}	
		</div>
		<div className='btn-box'><button onClick={() => nav('/news')} className='btn btn-primary allnews_btn'>Все новости</button></div>
	</> 
  )
}

export default NewsItem

{/* <Card key={news.id} className='card-item'> */}
// <CardMedia
// component="img"
// image={news?.image?.url}
// className='news-item__img'
// alt={news.title}
// />
// <CardContent>
// <Typography gutterBottom variant="h5" component="div">
// 	{news.title}
// </Typography>
// <Typography variant="body2" color="text.secondary">
// 	{news.description}
// </Typography>

// </CardContent>
// <div className='card-actions'>
// 	<Typography variant="body2">
// 		{news.date}
// 	</Typography>
// 	<Link to={`/news/${news.id}`} className='btn btn-primary'>Подробнее</Link>
// </div>
// </Card>

