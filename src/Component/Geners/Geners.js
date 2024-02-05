import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './Geners.css';
import { Api } from '../Api';
import Loading from '../Loading/Loading';
import { GenersContext } from '../../ContextApi/GenersContext/GenersContext';

export default function Geners() {
const genrecontext=useContext(GenersContext)
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 9,
        spaceBetween: 40,
      },
    },
  };

  return (
    <>
      <div className='cgener'>
  
        <Swiper
          {...swiperParams}
          centeredSlides={false}
          grabCursor={true}
          modules={[Pagination]}
          className="geners"
        >
{genrecontext.imageLoaded?   (genrecontext.geners.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`./${item}`} className='genersitem'>{item}</Link>
            </SwiperSlide>
          ))):
          <> 
          {Array.from({ length: 9 }, (_, index) => (
              <SwiperSlide key={index} >
                <Loading height={'30px'} />
              </SwiperSlide>
            ))}
                </>

          }
       
        </Swiper>
      </div>
    </>
  );
}
