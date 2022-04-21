import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editNews, getNewsInfo, postNews } from '../../store/reducers/news.reducer';
import axios from '../../api/axios';
import './AddNews.css'
import { useNavigate, useParams } from 'react-router-dom';


function AddNews() {
	const user = useSelector(store => store.auth.user)
	const [news, setNews] = useState({
		title: '',
		description: '',
		text: '',
		date: '',
	});
	const [image, setImage] = useState(null)



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

		const formData = new FormData();
		formData.append('files', file);
		axios
			.post("/upload/", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${user.token}`
			},
			})
			.then((res) => {
			const data = {
				data: {
				...news,
				image: res.data,
				},
			};
	
			dispatch(postNews(data));
		})
		.then(() => {
			navigate('/news');
		})
	
	  }

	return (
		<div className='container'>
		<h1 >Добавить новость</h1> 
		
		<form onSubmit={submitHandler} className="news__form">
		  <div className='news__form-left'>
			<div className='news__form-group'>
			  <label htmlFor='title'>Заголовок новости</label>
			  <input
				className='forminput'
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
				placeholder='Введите краткое описание новости'
				name='description'
				id='description'
				onChange={changeHandler} />
			</div>
			{/* {<div className='selected-imgbox'><img src={} alt="" className='selected-img' /></div>} */}
			<div className='news__img-select'>
			  <input type="file" name="file" onChange={onFileSelect} />
			</div>

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
				name='date'
				type="date"
				id='date'
				onChange={changeHandler} />
			</div>
			<div className='formbtn-box'>
				<button className='btn btn-primary'>Добавить новость</button>
			</div>
		  </div>
		  
		  
		


		</form>
	  </div>
  )
}

export default AddNews;

	

// <form onSubmit={submitHandler} className="addnews-form">
// 	<div className='leftside'>
// 		<label htmlFor="title">Заголовок новости</label>
// 		<input onChange={changeHandler} id='title' name='title' className='input' type="text" placeholder='Введите заголовок новости'/>
// 		<label htmlFor="desc">Краткое описание</label>
// 		<input onChange={changeHandler} id='desc' className='description-field' name='description' type="text" placeholder='Краткое описание'/>
// 		{!edit && <input type="file" name='file' onChange={onFileSelect}/>}

// 	</div>
// 	<div className='rightside'>
// 		<textarea onChange={changeHandler} name="text" placeholder='Текстовое содержимое'></textarea>
// 		{!edit ? <button >Submit</button> : <button >Edit</button>}
// 	</div>
// </form>