import React from 'react'
import NewsItem from '../../components/NewsItem/NewsItem';
import Slider from '../../components/Slider/Slider'
import './Main.css'


function Main() {
    return (
  <>
      <Slider/>
      <div className='container'>
          <section className='section'>
            <h1 className='section__title'>Актуальные новости</h1>
            <NewsItem/>
          </section>
      </div>
      <form className='form-email'>
            <input className='form-email__input' type="email" placeholder='Введите свой email'/>
            <button className='form-email__btn'>Подписаться на новости</button>
      </form>
  </>
  )
}

export default Main