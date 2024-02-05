import { createContext, useEffect, useState } from "react";
import { Api } from "../../Component/Api";

export const GenersContext = createContext({
    imageLoaded:()=>{},
    geners:()=>{}

});

export const GenersContextProvider = (props) => {
  const { children } = props;

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

  const value = {
    imageLoaded,
    geners
   
  };

  return (
    <GenersContext.Provider value={value}>{children}</GenersContext.Provider>
  );
};
