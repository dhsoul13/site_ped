/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LocationSvg from '../../../assets/icon/location';
import { addShowChangeCity } from '../../../store/slice/showChangeCity';
import { addShow } from '../../../store/slice/showPopUp';
import Humburger from '../humburger';

const HeaderForLayout = () => {
  const dispath = useDispatch();
  const { isAuth } = useSelector((state) => state.Auth);
  const { current } = useSelector((state) => state.Location);
  console.log(current);
  const getLink = useCallback(({ link = '/', isAuth, city = false }) => {
    if (!isAuth && !city) {
      dispath(addShow());
      <Navigate to='/' />;
    }
    if (city) {
      dispath(addShowChangeCity());
    } else {
      return <Navigate to={link} />;
    }
  }, []);
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__content'>
          <div className='header__img'>
            <img src='./img/logo.png' alt='Логотип' />
          </div>
          <div className='header__link'>
            <ul className='header__list'>
              <li
                className='header__item link'
                onClick={(link) => {
                  getLink({ link, isAuth });
                }}
              >
                ЛИЧНЫЙ КАБИНЕТ
              </li>
              <li className='header__item link'>О НАС</li>
              <li className='header__item link'>НОВОСТИ И АКЦИИ</li>
              <li className='header__item link'>КОНТАКТЫ</li>
              <li className='header__item link'>БЛОГ</li>
            </ul>
          </div>
          <div className='header__location'>
            <LocationSvg />
            <h2
              className='header__location-title link'
              onClick={() => {
                getLink({ link: '/', isAuth, city: true });
              }}
            >
              {current}
            </h2>
          </div>
          <div className='header__burger'>
            <Humburger />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderForLayout;
