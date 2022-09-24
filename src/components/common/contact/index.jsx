/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LocationSvg from '../../../assets/icon/location';
import PhoneSvg from '../../../assets/icon/phone';
import TimeSvg from '../../../assets/icon/time';
import CustomeSpiner from '../spiner';

const Contact = ({ className }) => {
  const { data, current } = useSelector((state) => state.Location);
  const [mas, setMas] = useState([]);
  const [currentSrc, setCurrentSrc] = useState('');
  useEffect(() => {
    if (current && data.length > 0) {
      data.find((el) => (el.title === current ? setCurrentSrc(el.src) : ''));
      data.find((el) => (el.title === current ? setMas(el.data) : ''));
    }
  }, [data, current]);
  return (
    <div className={`${className}__container contact`}>
      <h2 className={`${className}__text contact__text`}>Контакты</h2>
      {mas.length ? (
        <div className={`${className}__content contact__content`}>
          <div className={`${className}__left contact__left`}>
            <div className={`${className}__location contact__location`}>
              {mas.map((el, index) => (
                <div className={`${className}__elem contact__elem`} key={index}>
                  <h2
                    className={`${className}__elem-title contact__elem-title`}
                  >{`Айболит на ${el.title}`}</h2>
                  <ul className={`${className}__list contact__list`}>
                    <li
                      className={`${className}__list-item contact__list-item`}
                    >
                      <div
                        className={`${className}__list-icon contact__list-icon`}
                      >
                        <LocationSvg />
                      </div>
                      <div
                        className={`${className}__list-info contact__list-info`}
                      >
                        {el.streat}
                      </div>
                    </li>
                    <li
                      className={`${className}__list-item contact__list-item`}
                    >
                      <div
                        className={`${className}__list-icon contact__list-icon`}
                      >
                        <PhoneSvg />
                      </div>
                      <div
                        className={`${className}__list-info contact__list-info`}
                      >
                        {el.phone}
                      </div>
                    </li>
                    <li
                      className={`${className}__list-item contact__list-item`}
                    >
                      <div
                        className={`${className}__list-icon contact__list-icon`}
                      >
                        <TimeSvg />
                      </div>
                      <div
                        className={`${className}__list-info contact__list-info`}
                      >
                        {el.timeEnd}
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={`${className}__right contact__right`}>
            <h2 className={`${className}__map contact__map`}>
              <iframe
                src={currentSrc}
                width='100%'
                height='auto'
                frameBorder='0'
              ></iframe>
            </h2>
          </div>
        </div>
      ) : (
        <CustomeSpiner />
      )}
    </div>
  );
};

export default Contact;
