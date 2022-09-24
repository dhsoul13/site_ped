import React from 'react';
import { NavLink } from 'react-router-dom';
import PathIcon from '../../../assets/icon/path';
import { dignitiesContent } from '../../../helpers/pages/main/srcIcon';
import Contact from '../../common/contact';
import LinkSercies from '../../component/MainPage/link-servies';
import SliderPeople from '../../component/MainPage/slider-people';
import SliderMain from '../../component/MainPage/slider-type-1';

const MainPage = () => (
  <div className='main'>
    <div className='main__container'>
      <div className='main__content'>
        <section className='main__slider-body section'>
          <SliderMain />
        </section>
        <section className='main__links  links container section'>
          <div className='links__body'>
            <LinkSercies />
          </div>
        </section>
        <section className='main__info-company  info-company container section'>
          <div className='info-company__history'>
            <h2 className='info-company__title'>История компании</h2>
            <p className='info-company__text'>
              История компании начинается 14 января 1999 года, когда было
              образовано ООО «Чижи». Идея пришла, т.к. у основателя компании
              Прозор Жанны Георгиевны была собака боксёр по кличке Бард…
            </p>
            <NavLink to='/' className='info-company__link link'>
              ЧИТАТЬ ДАЛЕЕ{' '}
              <span className='info-company__link-icon'>
                <PathIcon />
              </span>
            </NavLink>
          </div>
          <div className='info-company__slider-body'>
            <SliderPeople />
          </div>
          <div className='info-company__link-body'>
            <NavLink to='/' className='info-company__link link'>
              ПОСМОТРЕТЬ ВСЕХ{' '}
              <span className='info-company__link-icon'>
                <PathIcon />
              </span>
            </NavLink>
          </div>
        </section>
        <section className='main__succses-block succses-block'>
          <div className='succses-block__container container'>
            <div className='succses-block__content'>
              <h2 className='succses-block__main-title'>1 150 000</h2>
              <h3 className='succses-block__subtitle'>
                питомцам мы помогли за 18 лет работы
              </h3>
              <div className='succses-block__img '>
                <img src='./img/bird.png' alt='Птичка' />
              </div>
            </div>
          </div>
        </section>
        <section className='main__dignities  dignities section'>
          <div className='dignities__container container'>
            <div className='dignities__content'>
              <h2 className='dignities__text'>Почему хозяева выбирают нас?</h2>
              <ul className='dignities__list'>
                {dignitiesContent.map((el) => (
                  <li className='dignities__item' key={el.key}>
                    <h2 className='dignities__item-title'>{el.title}</h2>
                    <div className='dignities__item-content'>
                      <div className='dignities__item-icon'>{el.src}</div>
                      <p className='dignities__item-text'>{el.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className='main__mobile mobile'>
          <div className='mobile__container container'>
            <div className='mobile__content'>
              <div className='mobile__text'>
                <h4 className='mobile__info'>скоро</h4>
                <h2 className='mobile__title'>
                  Удобное приложение для питомцев и их хозяев
                </h2>
                <div className='mobile__social-icon'>
                  <div className='mobile__social-icon-1'>
                    <img src='../img/Group 5 Copy.png' alt='' />
                  </div>
                  <div className='mobile__social-icon-2'>
                    <img src='../img/Group 5 Copy.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='main__contact-main contact'>
          <div className='contact-main__container container'>
            <Contact className='contact-main' />
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default MainPage;
