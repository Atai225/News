import React from 'react';
import './Contacts.css'

function Contacts() {
  return (
	<div className='contact'>
		<h1>Свяжитесь с нами</h1>
		<h3>Отправьте сообщение</h3>
		<p>Пожалуйста, используйте форму ниже, чтобы связаться с NewsGuard. Используя эту форму, вы можете связаться с любыми вопросами или предложениями по улучшению нашего продукта или сообщить нам, что вы заинтересованы в нашем расширении для браузера, продуктах для защиты бренда или программе партнерства с библиотеками.</p>
		<form>
			<div className='contact__inputs'>
				<input type="text" placeholder='Name*' className='name__input'/>
				<input type="text" placeholder='Email*' />
			</div>
			<label htmlFor='select' className='select__label'>О чем ваш вопрос?*</label>
			<select name="" id="select" >
				<option value="">Ошибка</option>
				<option value="">Проблемы с чем-то</option>
			</select>
			<textarea name="" id="" placeholder='Comment'></textarea>
			<button className='contact__send-btn'>Отправить</button>
		</form>
			<h3>Тех.поддержка</h3>
			<p>Нужна помощь с расширением браузера NewsGuard или подпиской на NewsGuard? Получить техническую поддержку <a href='#'>здесь</a>.</p>
			<h3>Сообщить о проблеме</h3>
			Если вы хотите сообщить об ошибке в нашей отчетности или о фактической ошибке в одной из наших этикеток о пищевой ценности, вы можете нажать здесь, чтобы отправить нам электронное письмо напрямую. Чтобы узнать больше о нашей политике рассмотрения таких отчетов и исправления ошибок, ознакомьтесь с нашей политикой исправления.
			<h3>Оставьте отзыв</h3>
			<p>Чтобы запросить оценку веб-сайта, воспользуйтесь этой формой.</p>
	</div>
  )
}

export default Contacts