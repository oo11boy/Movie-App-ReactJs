import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Suggestion.css';
import { FaRegCirclePlay } from "react-icons/fa6";
import { Api } from '../Api';


export default function Suggestion(props) {
    const { type } = props
    const [showtitle, setshowtitle] = useState(-1)
    const [MovieList, setMovieList] = useState([])
   
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${Api}Movie?_sort=-imdb`);
          const data = await response.json();
          setMovieList(data)
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
   


    return (
        <div className='suggestion p-relative'>
            {MovieList.slice(0, 5).map((item, index) => (
                <div onMouseLeave={() => setshowtitle(null)} onMouseEnter={() => setshowtitle(index)} key={index} className='su'>
                    {index < 5 &&
                        <>

                            <img src={item.post_image_link} alt="" />

                            {showtitle == index &&
                                <Link to={'/'+ item.id+'/'+item.title}>
                                    <div className='titlesu'>
                                        <FaRegCirclePlay />
                                        <h2>{item.title}</h2>
                                        <p>{item.genre}</p>
                                        <p className='imdbrate'>{item.imdb}Imdb</p>

                                    </div>
                                </Link>
                            }

                        </>
                    }
                </div>
            ))}
            <div className='Su6 p-relative' >

                {MovieList.slice(5, 7).map((item, index) => {
                    return <div onMouseLeave={() => setshowtitle(null)} onMouseEnter={() => setshowtitle(index + 6)} className='su4t p-relative'>

                        <img src={item.post_image_link} alt="" />

                        <Link to={'/'+ item.id+'/'+item.title}>
                            {showtitle == index + 6 && <div className='titlesu'>
                                <FaRegCirclePlay />
                                <h2>{item.title}</h2>
                                <p>{item.genre}</p>
                                <p className='imdbrate'>{item.imdb}Imdb</p>
                            </div>

                            }
                        </Link>

                    </div>
                })}

            </div>



        </div>
    );
}
