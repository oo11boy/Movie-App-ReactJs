import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './Geners.css';
import { Api } from '../Api';

export default function Geners() {
  const [geners, setGeners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api}Movie`);
        const data = await response.json();

        // Extract unique genres and split multi-genre strings
        const uniqueGenres = Array.from(new Set(data.flatMap(item => item.genre.split("  ،  "))));

        // Set state with unique genres
        setGeners(uniqueGenres);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
        <div className='titlegener'>ژانرهای فیلم و سریال:</div>
        <Swiper
          {...swiperParams}
          centeredSlides={false}
          grabCursor={true}
          modules={[Pagination]}
          className="geners"
        >
          {geners.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`./${item}`} className='genersitem'>{item}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
