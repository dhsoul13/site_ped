/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-var */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable import/order */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { worker } from '../../../../helpers/pages/main/worker';
import 'swiper/css/navigation';
import useWindowDimension from '../../../../HOC';
import { countSlider } from '../../../../helpers/pages/main/sliderCount';

const SliderPeople = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const width = useWindowDimension().width;
  const [count, setCount] = useState(6);
  useEffect(() => {
    console.log(width);
    countSlider({
      width: width,
      setCount: setCount,
    });
  }, [width]);

  return (
    <div className='info-company__slider-compnent'>
      <h2 className='info-company__title'>Наши специалисты</h2>
      <div className='info-company__slider-content'>
        <div
          ref={navigationPrevRef}
          className='info-company__slider-arrow prev-arrow'
        >
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.571289 6.99998C0.571289 6.78492 0.655322 6.56988 0.823035 6.40591L6.10325 1.24617C6.43914 0.917943 6.98372 0.917943 7.31948 1.24617C7.65523 1.57426 7.65523 2.10632 7.31948 2.43458L2.64725 6.99998L7.31931 11.5654C7.65506 11.8936 7.65506 12.4256 7.31931 12.7537C6.98356 13.0821 6.43898 13.0821 6.10309 12.7537L0.822872 7.59405C0.655132 7.43 0.571289 7.21496 0.571289 6.99998Z'
              fill='white'
              stroke='white'
            />
          </svg>
        </div>
        <Swiper
          className='info-company__slider'
          slidesPerView={count}
          spaceBetween={15}
          autoHeight
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {worker.map((el) => (
            <SwiperSlide
              style={{
                border: `1px solid`,
              }}
              className='info-company__slide'
            >
              <NavLink to={el.link}>
                <div>Привет</div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={navigationNextRef}
          className='info-company__slider-arrow next-arrow'
        >
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.42871 6.99998C8.42871 6.78492 8.34468 6.56988 8.17697 6.40591L2.89675 1.24617C2.56086 0.917943 2.01628 0.917943 1.68052 1.24617C1.34477 1.57426 1.34477 2.10632 1.68052 2.43458L6.35275 6.99998L1.68069 11.5654C1.34494 11.8936 1.34494 12.4256 1.68069 12.7537C2.01644 13.0821 2.56102 13.0821 2.89691 12.7537L8.17713 7.59405C8.34487 7.43 8.42871 7.21496 8.42871 6.99998Z'
              fill='white'
              stroke='white'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SliderPeople;
