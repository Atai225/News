import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Slider.css'
import image from './WillSmith.jpg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'





function Slider() {
	const newss = useSelector(store => store.news.data)
	const navigate = useNavigate()
	
  return (
	<Carousel fade>
		{
			newss.map(news => {
					return <Carousel.Item key={news.id}>
						<img
						className="d-block w-100 slider__img"
						src={news?.image?.url}
						alt="Second slide"
						/>

						<Carousel.Caption onClick={() => navigate('/news')} className='bg-white rounded-3 p-2 slider__info'>
						<h3 className='text-black'>{news.title}</h3>
						<p className='text-black '>{news.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
					
				
			})
		}
	</Carousel>
  )
}

export default Slider