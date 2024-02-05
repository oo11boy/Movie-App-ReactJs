import React from 'react'
import Suggestion from '../../Component/Suggestion/Suggestion'
import Header from '../../Component/Header/Header'
import Geners from '../../Component/Geners/Geners'
import BoxMovieSlider from '../../Component/BoxMovieSlider/BoxMovieSlider'
import SliderMovie from '../../Component/SliderMovie/SliderMovie'


export default function Home() {
  return (
    <div>
      <Header />
      <SliderMovie />
      {/* <Suggestion type="tv" /> */}

      <Geners />
      <BoxMovieSlider type="movie" titleprops="برترین فیلم ها:" sort="-imdb" order="desc" />

      <BoxMovieSlider type="movie" titleprops="جدیدترین فیلم ها:" sort="-year" order="desc" />

      <BoxMovieSlider type="tv" titleprops="برترین سریال ها:" sort="-imdb" order="desc" />
      <BoxMovieSlider type="tv" titleprops="جدیدترین سریال ها:" sort="-year" order="desc" />

      <BoxMovieSlider type="animation" titleprops="برترین انیمیشن ها:" sort="imdb" order="desc" />
     
    </div>
  )
}
