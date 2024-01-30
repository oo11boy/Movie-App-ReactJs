
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderMovie.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Api } from '../Api';

export default function SliderMovie() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [MovieList, setMovieList] = useState([])


  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`${Api}Slider`);
              const data = await response.json();
              setMovieList(data)

          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3650,
          disableOnInteraction: true,
        }}
   
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="SliderMovie">
        {MovieList.map((item) => {
            return <>
                {item.type == "video" && <SwiperSlide className='imgslider'>
                    <video autoPlay muted loop src="https://static.namava.ir/Content/Upload/Images/9cc37088-cdc1-4b5d-b546-113b385cd7be.mp4"></video>
                </SwiperSlide>}
                {item.type != "video" && <SwiperSlide className='imgslider' style={{ backgroundImage: `url(${item.img})` }}></SwiperSlide>}

            </>

        })}
    

    <div className='bg-blacker'></div>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

      </Swiper>
    </>
  );
}
