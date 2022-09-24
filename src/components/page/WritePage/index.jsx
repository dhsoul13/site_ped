/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthCheack } from '../../../helpers/isAuth';
import { addShow } from '../../../store/slice/showPopUp';
import LayoutPage from '../../common/layout';

const WritePage = () => {
  const isAuth = useSelector((state) => state.Auth);
  const dispath = useDispatch();
  return (
    <div className='write'>
      <div className='write__container container'>
        <LayoutPage className='write' title={'Запись на прием'}>
          <div className='write__links'>
            <div
              className='write__link-service'
              onClick={() => {
                isAuthCheack({
                  isAuth,
                  show: dispath(addShow()),
                  link: '/',
                });
              }}
            >
              <h2>Онлайн-консультация</h2>
              <span>2000 ₽</span>
            </div>
            <div className='write__link-service'>
              <h2>Примем в клинике</h2>
              <span>Бесплатно</span>
            </div>
          </div>
        </LayoutPage>
      </div>
    </div>
  );
};

export default WritePage;
