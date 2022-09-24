/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Menu, SubMenu, Item } from 'burger-menu';
import { NavLink } from 'react-router-dom';
import 'burger-menu/lib/index.css';
import LocationSvg from '../../../assets/icon/location';

const Humburger = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className={`tb tb--md ${isOpen ? 'tb--x' : ''}`} onClick={() => setIsOpen(!isOpen)}>
				<span />
			</div>
			<Menu htmlClassName='burger-menu' isOpen={isOpen} selectedKey='entry' onClose={() => setIsOpen(false)}>
				<SubMenu title={<span className='header__menu-humburger link'>Меню</span>} itemKey='manage'>
					<Item
						itemKey='person'
						icon={false}
						text={
							<NavLink to='/' className='header__item-humburger link'>
								ЛИЧНЫЙ КАБИНЕТ
							</NavLink>
						}
					/>
					<Item
						itemKey='about us'
						className='header__item link'
						text={
							<NavLink to='/' className='header__item-humburger link'>
								О НАС
							</NavLink>
						}
					/>
					<Item
						itemKey='news'
						className='header__item link'
						text={
							<NavLink to='/' className='header__item-humburger link'>
								НОВОСТИ И АКЦИИ
							</NavLink>
						}
					/>
					<Item
						itemKey='contact'
						text={
							<NavLink to='/' className='header__item-humburger link'>
								КОНТАКТЫ
							</NavLink>
						}
					/>
					<Item
						itemKey='blog'
						text={
							<NavLink to='/' className='header__item-humburger link'>
								БЛОГ
							</NavLink>
						}
					/>
				</SubMenu>
				<Item
					itemKey='location'
					icon={<LocationSvg />}
					text={
						<NavLink to='/' className='header__location-humburger link'>
							ЛИЧНЫЙ КАБИНЕТ
						</NavLink>
					}
				/>
			</Menu>
		</>
	);
};

export default Humburger;
