/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { linkServies } from '../../../../helpers/pages/main/srcIcon';

const LinkSercies = () => (
	<>
		{linkServies.map((el) => (
			<NavLink to='/' className='links__el'>
				<div className='links__left'>
					<h2 className='links__title'>{el.title}</h2>
					<h3 className='links__count-serv link'>{el.count} услуги</h3>
				</div>
				<div className='links__right'>
					<div className='links__img'>{el.src}</div>
				</div>
			</NavLink>
		))}
	</>
);

export default LinkSercies;
