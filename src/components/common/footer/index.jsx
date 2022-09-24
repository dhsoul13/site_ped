import React from 'react';

const FooterForLayout = () => (
	<footer className='footer'>
		<div className='footer__container container'>
			<div className='footer__content'>
				<div className='footer__logo'>
					<img src='./img/logo-footer.png' alt='' />
				</div>
				<div className='footer__section-1'>
					<h2 className='footer__title'>
						Айболит
						<span>ветеринарная клиника</span>
					</h2>
					<p className='footer__copy'>Политика конфиденциальности в отношении обработки персональных данных</p>
				</div>
				<div className='footer__section-2'>
					<ul className='footer__list'>
						<li className='footer__item'>Главная</li>
						<li className='footer__item'>Услуги и цены</li>
						<li className='footer__item'>История компании</li>
						<li className='footer__item'>Наши специалисты</li>
						<li className='footer__item'>Вакансии</li>
						<li className='footer__item'>Реквизиты</li>
						<li className='footer__item'>Онлайн-оплата</li>
					</ul>
				</div>
				<div className='footer__section-3'>
					<ul className='footer__list'>
						<li className='footer__item'>Отзывы</li>
						<li className='footer__item'>Контакты</li>
						<li className='footer__item'>Груминг-салон</li>
						<li className='footer__item'>Косметика </li>
						<li className='footer__item'>Новости и акции</li>
						<li className='footer__item'>Блог</li>
					</ul>
				</div>
				<div className='footer__section-4'>
					<div className='footer__link-store'>
						<div>
							<img src='./img/Group 5 Copy.png' alt='apple-store' />
						</div>
						<div>
							<img src='./img/Group 5 Copy.png' alt='apple-store' />
						</div>
					</div>
					<ul className='footer__links-list'>
						<li className='footer__links-item'>1</li>
						<li className='footer__links-item'>2</li>
						<li className='footer__links-item'>3</li>
						<li className='footer__links-item'>4</li>
					</ul>
					<ul className='footer__links-email'>
						<li className='footer__list-email'>aibolit34.ru</li>
						<li className='footer__list-email'>aibolit34@gmail.com</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
);

export default FooterForLayout;
