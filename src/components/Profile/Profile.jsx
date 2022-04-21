import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, getUser } from '../../store/reducers/auth.reducer';
import './Profile.css'

function Profile() {
	const userInfo = useSelector(store => store.auth.profile);
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])

	


	  if(userInfo){
		return (
			<div className='container'>
					<h1 style={{textAlign: 'center', padding: '1rem 0 3rem 0'}}>Личная информация</h1>

				<div className='profile'>

					<div className='profile-imgbox'><img className='profile-img' src={userInfo?.image?.url} alt="" /></div>
					<div className='profile-info'>
						<h1 className='profile__name'>{userInfo?.user.username}</h1>
						<h4 className='profile__prof'>{userInfo.profession}</h4>
						<p className='profile__hobby'>Хобби: {userInfo.hobby}</p>
						<p className='profile__posts'>Количество постов: {userInfo.posts} </p>
						<p className='profile__date'>Дата рождения: {userInfo.age}</p>
					</div>
				</div>
			</div>
 	 	)
	}else{
		return (
			<div className='container profile-container'>
				<h1>Информация о вас</h1>
				<div className='profile-fill'>
					{/* {user && <div className='profile-img'>
						<img src={} alt="" />
					</div>} */}
				
					<input type="file" name='image' className='profile-fill__img'/>
					<input type="text" name='username' className='profile-fill__username' placeholder='Введите ваше имя*'/>
					<input type="text" name='profession' className='profile-fill__prof' placeholder='Введите вашу профессию*'/>
					<input type="text" name='hobby' className='profile-fill__hobby' placeholder='Введите ваши хобби*'/>
					<input type="date" name='age' className='profile-fill__date'/>
				</div>
			</div>
		)
	}
}

export default Profile