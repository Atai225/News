import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editNews, getNewsInfo, postNews } from '../../store/reducers/news.reducer';
import './Edit.css'
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {
	const newsItem = useSelector(store => store.news.dataItem)
	const [news, setNews] = useState(newsItem || {
		title: '',
		description: '',
		text: '',
		date: '',
		image: null,
	});




	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [file, setFile] = useState(null);
	const {id} = useParams()

	const changeHandler = (e) => {
		setNews(item => {
			return {
			  ...item,
			  [e.target.name]: e.target.value
			}
		  })	
	}

	useEffect(() => {
		dispatch(getNewsInfo(id));
	}, [])

	const onFileSelect = e => {
		setFile(e.target.files[0])
	}
	
	  const submitHandler = e => {	
		e.preventDefault()
		dispatch(editNews({id, news})).then(()=> navigate('/news'))
	
	  }

	return (
		<div className='container'>
		<h1 >Редактировать новость</h1>
		
		<form onSubmit={submitHandler} className="news__form">
		  <div className='news__form-left'>
			<div className='news__form-group'>
			  <label htmlFor='title'>Заголовок новости</label>
			  <input
				className='forminput'
				value={news.title}
				name='title'
				type="text"
				id='title'
				placeholder='Введите заголовок'
				onChange={changeHandler} />

			 	
			</div>
			<div className='news__form-group'>
			  <label htmlFor='description'>Краткое описание</label>
			  <textarea
				className='forminput description-area'
				value={news.description}
				placeholder='Введите краткое описание новости'
				name='description'
				id='description'
				onChange={changeHandler} />
			</div>
		
			{/* <div className='news__img-select'>
			  <input type="file" name="file" onChange={onFileSelect} />
			</div> */}

		  </div>
		  <div className="news__form-right">
			<div className='news__form-group'>
			  <label htmlFor='text'>Полное описание новости</label>
			  <textarea
				className='forminput textarea'
				value={news.text}
		  		
				placeholder='Введите текстовый контент'
				name='text'
				id='text'
				onChange={changeHandler} />

				<label className='datelabel' htmlFor='date'>Дата</label>
				<input
				className='forminput date'
				value={news.date}
				name='date'
				type="date"
				id='date'
				onChange={changeHandler} />
			</div>
			<div className='formbtn-box'>
				<button className='btn btn-primary'>Сохранить изменения</button>
			</div>
		  </div>
		  
		  
		


		</form>
	  </div>
  )
}

export default Edit;

	

