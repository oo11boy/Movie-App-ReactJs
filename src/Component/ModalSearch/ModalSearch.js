import React, { useContext, useEffect, useState } from 'react';
import { useSpring } from "react-spring";
import { animated } from "react-spring";
import './ModalSearch.css';
import { SearchModalContext } from '../../ContextApi/SearchModalContext/SearchModalContext';
import { GenersContext } from '../../ContextApi/GenersContext/GenersContext';
import { Api } from '../Api';
import { useNavigate, useParams } from 'react-router-dom';

const ModalSearch = () => {
 


  const generContext = useContext(GenersContext);
  const modalcontext=useContext(SearchModalContext)
  
  const menuAnimation = useSpring({
    maxHeight: modalcontext.isMenuOpen ? 200 : 0,
    opacity: modalcontext.isMenuOpen ? 1 : 0,
  });
  const navi=useNavigate()
 

  return (
    <>
      {modalcontext.isOpen && (
        <div className="modal-overlay" >
          <div className="modal-content">
            <span className="close-btn" onClick={() => modalcontext.setModalOpen(false)}>
              &times;
            </span>

            <div className='filtersbody'>
              <div className="sec1filter">
                <p>فیلترها</p>
                <p className="delallfilter" onClick={modalcontext.clearFilters}>
                  حذف همه
                </p>
              </div>

              <div className='sec2filter'>
                <div className='tvmov'>
                  <div>
                    سریال
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={modalcontext.isTVChecked}
                      onChange={() => modalcontext.setTVChecked(!modalcontext.isTVChecked)}
                    />
                  </div>
                  <div>
                    فیلم
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={modalcontext.isMovieChecked}
                      onChange={() => modalcontext.setMovieChecked(!modalcontext.isMovieChecked)}
                    />
                  </div>
                </div>

                <div className='tvmov'>
                  <div>
                    جدیدترین
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={modalcontext.isNewestChecked}
                      onChange={() => {
                        modalcontext.setNewestChecked(true);
                        modalcontext.setPopularChecked(false);
                      }}
                    />
                  </div>
                  <div>
                    محبوب ترین
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={modalcontext.isPopularChecked}
                      onChange={() => {
                        modalcontext.setNewestChecked(false);
                        modalcontext.setPopularChecked(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className='DropdownMenu'>
                <div className='Toggle' onClick={modalcontext.toggleMenu}>
                  <p>ژانر</p>
                  <animated.div ><p>{modalcontext.isMenuOpen ? '-' : '+'}</p></animated.div>
                </div>
                <animated.div style={menuAnimation} className='MenuContent'>
                  {generContext.geners.map((item, index) => (
                    <p
                      key={index}
                      data-index={index}
                      data-value={item}
                      className={index === modalcontext.selectedGenreIndex ? 'selected' : ''}
                      onClick={() => {
                     navi('../'+item)
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </animated.div>
              </div>


              <div>
                <p className='setedfilter' onClick={()=>modalcontext.setModalOpen(false)}>اعمال</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSearch;
