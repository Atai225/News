import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Paginations from '../../components/Paginations/Paginations';
import {getNews} from '../../store/reducers/news.reducer';
import './News.css';
import { RiCalendar2Fill } from "react-icons/ri";


function News() {
	const location = useLocation()
	const nav = useNavigate()
	const newss = useSelector(store => store.news.data)
	const dispatch = useDispatch();

	const [currentPage, setCurrentPage] = useState(1);
	const [newsPerPage] = useState(3);

	const lastNewsIndex = currentPage * newsPerPage;
	const firstNewsIndex = lastNewsIndex - newsPerPage;
	const currentNews = newss.slice(firstNewsIndex, lastNewsIndex);
	
	useEffect(() => {
		dispatch(getNews());
	  }, [dispatch]);

	  const paginate = (pageNumber) => setCurrentPage(pageNumber)

	
	
  return (
	<div className='container'>
		<h1 className='text-center pb-5 pt-3'>Список новостей</h1>
		<section className='section__news'>
			{
				currentNews.map(news => {
					return <div className='news my-3' key={news.id}>
						<img src={news?.image?.url} alt="" className='news__img' />
						<div className='news__info'>
							<h2 className='news__title'>{news.title}</h2>
							<p className='news__text'>{news.description}</p>
							<div className='news__footer'>
									<p className='news__data'><RiCalendar2Fill/> {news.date}</p>
									<button className='btn btn-primary' onClick={()=> nav(`/news/${news.id}`)}>Подробнее</button>
									{/* <button onClick = {() => nav('newsinfo', {state: news})} className='news__btn btn btn-primary'>Подробнее</button> */}
							</div>
	
						</div>
					</div>
				})
			}
			{/* <button onClick={(e) => dispatch(getNews(e.target.value()))}>1</button><button onClick={(e) => dispatch(getNews(e.target.value()))}>2</button> */}
			<Paginations newsPerPage={newsPerPage} totalNews={newss.length} paginate={paginate}/>
		</section>
	</div>
  )
}

export default News
