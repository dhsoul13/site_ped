/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExitIcon from '../../../../assets/icon/exit-icon';
import { changeLocation } from '../../../../store/slice/locationSlice';
import { removeShowChangeCity } from '../../../../store/slice/showChangeCity';

const ChangeCity = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Location.data);
  const hiddenClickHandler = () => {
    dispatch(removeShowChangeCity());
  };
  const onChangeCity = useCallback((el) => {
    localStorage.setItem('location', el);
    dispatch(
      changeLocation({
        current: el,
      })
    );
    dispatch(removeShowChangeCity());
  }, []);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const mas = [];
    data.map((el) => mas.push(el.title));
    setLinks(mas);
  }, [data]);
  return (
    <div className='change-city'>
      <div className='change-city__container'>
        <div className='change-city__content'>
          <div
            className='change-city__exit'
            onClick={() => {
              hiddenClickHandler();
            }}
          >
            <div>
              <ExitIcon />
            </div>
          </div>
          <h2 className='change-city__title'>Ваш город</h2>
          <ul className='change-city__list'>
            {links.map((el, index) => (
              <div
                className='change-city__item'
                key={index}
                onClick={() => {
                  onChangeCity(el);
                }}
              >
                {el}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangeCity;
