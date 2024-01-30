
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart, FaImdb, FaPlay } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderMovie.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Api } from '../Api';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function SliderMovie() {

  const [loadimg, setloadimg] = useState(false)


  const [MovieList, setMovieList] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Api}Slider`);
        const data = await response.json();
        setMovieList(data)
        setloadimg(true)
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
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
 
        className="SliderMovie">

        {loadimg ? <> {MovieList.map((item) => {
          return <>
            {item.type == "video" && <SwiperSlide className='imgslider'>
              <video autoPlay muted loop src="https://static.namava.ir/Content/Upload/Images/9cc37088-cdc1-4b5d-b546-113b385cd7be.mp4"></video>
              <div className='onslider'>
                  <h2>{item.title}</h2>
                  <div className='infoslide'>
                    <p>{item.year}</p>

                    <p><FaImdb />{item.imdb}</p>
                    <p><FaHeart />{item.critis_rate}</p>
                  </div>
                <p className='playsliderp'><Link className='playmslider'><FaPlay />ورود و پخش</Link></p>  
                </div>
            </SwiperSlide>

            }
            {item.type != "video" &&
              <SwiperSlide className='imgslider' style={{ backgroundImage: `url(${item.img})` }}>
                <div className='onslider'>
                  <h2>{item.title}</h2>
                  <div className='infoslide'>
                    <p>{item.year}</p>

                    <p><FaImdb />{item.imdb}</p>
                    <p><FaHeart />{item.critis_rate}</p>
                  </div>
                  <p className='playsliderp'>      <Link className='playmslider'><FaPlay />ورود و پخش</Link> </p>
                </div>
              </SwiperSlide>}

          </>

        })}

        </>
          : <>
            {Array.from({ length: 1 }, (_, index) => (
              <SwiperSlide key={index} className='imgslider' >
                <Loading height={'30vh'} />
                
              </SwiperSlide>
            ))}
          </>}



      </Swiper>
    </>
  );



}


