import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './Geners.css';
import { Api } from '../Api';
import Loading from '../Loading/Loading';

export default function Geners() {
  const [geners, setGeners] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api}Movie`);
        const data = await response.json();

        // Extract unique genres and split multi-genre strings
        const uniqueGenres = Array.from(new Set(data.flatMap(item => item.genre.split("  ،  "))));

        // Set state with unique genres
        setGeners(uniqueGenres);
        setImageLoaded(true); 
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
  
        <Swiper
          {...swiperParams}
          centeredSlides={false}
          grabCursor={true}
          modules={[Pagination]}
          className="geners"
        >
{imageLoaded?   (geners.map((item, index) => (
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
