import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Component/Header/Header'
import './Tools.css'
import { FaFilter, FaSearch } from 'react-icons/fa'
import { MdOutlineFilterList } from 'react-icons/md'

import { SearchModalContext } from '../../ContextApi/SearchModalContext/SearchModalContext'
import ModalSearch from '../../Component/ModalSearch/ModalSearch'
import LazyLoad from 'react-lazy-load'
import { FaRegCirclePlay } from 'react-icons/fa6'
import { Api } from '../../Component/Api'
import Loading from '../../Component/Loading/Loading'
import { Link, useParams } from 'react-router-dom'

export default function Tools() {
    const modalContext = useContext(SearchModalContext)

    const [showtitle, setshowtitle] = useState(-1);
    const [MovieList, setMovieList] = useState([]);
    const [MovieListbyg, setMovieListbyg] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(false);
const [searchtext,setsearchtext]=useState('')
    const isgener = useParams()


    
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(`${Api}Movie?${modalContext.filteritems.type =="movie" ? 'type=movie' : modalContext.filteritems.type =="tv" ? 'type=tv': '?'}&_sort=${modalContext.filteritems.order && "desc"}`);
                const data = await response.json();
console.log(response)
                setMovieList(data);
                setImageLoaded(true);
   
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [modalContext.filteritems,isgener.gener,searchtext]);

    


useEffect(() => {
    const findgener=MovieList.filter((item)=>item.genre.includes(isgener.gener))
    setMovieListbyg(findgener)
    
}, [MovieList,searchtext]);

useEffect(()=>{
    if(searchtext){
    const findtext=MovieList.filter((item)=>item.title.includes(searchtext))
    setMovieList(findtext)
}
},[modalContext.filteritems.type,modalContext.filteritems.order,searchtext,MovieListbyg])

const filteredMovies = isgener.gener == "search" ? MovieList.map((movie) => movie) : MovieListbyg.map((movie) => movie);
console.log(filteredMovies)
    return (
        <div className='searchpage'>
            <Header />
            <div className='SearchpBox'>
<div className='fathersearch'>
                <form action="" className='SearchP'>
                    <input type="text" onChange={(e)=>setsearchtext(e.target.value)} />
                    <FaSearch />
                    <MdOutlineFilterList onClick={() => modalContext.setModalOpen(true)} className='fafilter' />
                </form>
                </div>
                <div className='fzhaner'>
                <div className='filterdesktop'>
                    <MdOutlineFilterList />   <p onClick={() => { modalContext.setModalOpen(true) }}>فیلترگذاری</p>

                </div>
                {isgener.gener !="search" && <div className='catclass'>ژانر:  {isgener.gener}</div>}
                </div>
                <div className='itemresults'>
                    {imageLoaded ?
                        filteredMovies.map((item, index) => (
                            <div
                                key={index}
                                onMouseLeave={() => setshowtitle(-1)}
                                onMouseEnter={() => setshowtitle(index)}
                                className="itemimgS"
                            >
                                <div className='imgsearch'>
                                    <LazyLoad offset={300}><img src={item.post_image_link} alt="" />

                                    </LazyLoad>

                                    {showtitle === index && (
                                        <Link to={`/${item.id}/${item.item}`}>
                                            <div className="hoverbox2">
                                                <FaRegCirclePlay />
                                                <p className="imdbrate">Imdb: {item.imdb}</p>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                                <h2>{item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title}</h2>

                                <p>{item.genre}</p>


                            </div>
                        ))

                        :
                        <>
                            {Array.from({ length: 9 }, (_, index) => (
                                <div key={index} >
                                    <Loading height={'200px'} />
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>

            <ModalSearch />
            <>

            </>
        </div>
    )
}
