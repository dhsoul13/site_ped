/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { BootstrapButton } from '../../../../helpers/theme';
import { sliderContent } from '../../../../helpers/pages/main/content';

const SliderMain = () => {
  const [img, setImg] = useState(1);
  return (
    <div>
      <Swiper
        className='main__slider container'
        direction='vertical'
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className = 'slide') =>
            `<div class="slide ${className}"><span>${index + 1}</span></div>`,
        }}
        modules={[Pagination]}
        onSlideChange={(el) => setImg(el.activeIndex + 1)}
      >
        {sliderContent.map((el) => (
          <SwiperSlide className='main__slide' key={el.id}>
            <div className='main__slider-content'>
              <h1 className='main__slide-title'>{el.title}</h1>
              <BootstrapButton
                className='main__slide-button'
                onClick={() => {
                  alert(1);
                }}
              >
                Записаться
              </BootstrapButton>
              <div className='main__slide-links'>
                <div className='main__social'>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                </div>
                <div className='main__number'>+7 (8442) 96 22 92</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='main__img'>
        <img src={`./img/slider-title/${img}.png`} alt='Картинка' />
      </div>
    </div>
  );
};

export default SliderMain;
