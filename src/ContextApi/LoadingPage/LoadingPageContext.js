import { createContext, useState, useEffect } from "react";

export const LoadingContext = createContext({
  setloadingpage: () => {},
  loadingpage:false,
});

export const LoadingContextProvider = (props) => {
  const { children } = props;
  const [loadingpage, setloadingpage] = useState(false);
 
  const Loadingvalue = {
    setloadingpage: (value) => setloadingpage(value),
    loadingpage,
  };

  return (
    <LoadingContext.Provider value={Loadingvalue}>{children}</LoadingContext.Provider>
  );
};
