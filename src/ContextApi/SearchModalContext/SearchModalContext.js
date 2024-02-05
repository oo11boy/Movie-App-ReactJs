import { createContext, useEffect, useState } from "react";

export const SearchModalContext = createContext({
  setModalOpen: () => { },
  filteritems:()=>{},
  isOpen: () => { },
  clearFilters: () => { },
  setTVChecked: () => { },
  isTVChecked: () => { },
  isMovieChecked: () => { },
  setMovieChecked: () => { },
  isNewestChecked: () => { },
  setNewestChecked: () => { },
  setPopularChecked: () => { },
  isPopularChecked: () => { },
  toggleMenu: () => { },
  isMenuOpen: () => { },
  selectedGenreIndex: () => { },
  setGenersItem: () => { },
  setSelectedGenreIndex: () => { }
});

export const SearchModalContextProvider = (props) => {
  const { children } = props;

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setModalOpen] = useState(false)
  const [genersitem, setGenersItem] = useState('');
  const [selectedGenreIndex, setSelectedGenreIndex] = useState(null);
  const [filteritems, setFilterItems] = useState({
    gener: genersitem,
    order: '',
    type: ''
  });

  const [isTVChecked, setTVChecked] = useState(false);
  const [isMovieChecked, setMovieChecked] = useState(false);
  const [isNewestChecked, setNewestChecked] = useState(false);
  const [isPopularChecked, setPopularChecked] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    let type = '';
    if (isTVChecked && isMovieChecked) {
      type = '';
    } else if (isTVChecked) {
      type = 'tv';
    } else if (isMovieChecked) {
      type = 'movie';
    }

    let order = '';
    if (isNewestChecked) {
      order = 'new';
    } else if (isPopularChecked) {
      order = 'best';
    }

    setFilterItems({
      ...filteritems,
      gener: genersitem,
      type: type,
      order: order,
      
    });
  }, [genersitem, isTVChecked, isMovieChecked, isNewestChecked, isPopularChecked]);

  const clearFilters = () => {
    setFilterItems({
      gener: '',
      order: '',
      type: '',
    });
    setTVChecked(false);
    setMovieChecked(false);
    setNewestChecked(false);
    setPopularChecked(false);
    setSelectedGenreIndex(null); // Reset selected genre index
  };


  const Loadingvalue = {
    setModalOpen,
    isOpen,
    clearFilters,
    setTVChecked,
    isTVChecked,
    setMovieChecked,
    isMovieChecked,
    isNewestChecked,
    setNewestChecked,
    setPopularChecked,
    isPopularChecked,
    toggleMenu,
    isMenuOpen,
    selectedGenreIndex,
    setGenersItem,
    setSelectedGenreIndex,
    filteritems
  };

  return (
    <SearchModalContext.Provider value={Loadingvalue}>{children}</SearchModalContext.Provider>
  );
};
