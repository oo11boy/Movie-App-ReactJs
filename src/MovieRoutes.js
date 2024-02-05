

import Home from "./Pages/Home/Home";
import SingleGener from "./Pages/SingleGener/SingleGener";
import SingleMovie from "./Pages/SingleMovie";
import Tools from "./Pages/Tools/Tools";

 let MovieRoutes=[
    {path:'/' , element:<Home/>},
    {path:`/:movie/:id/:name` , element:<SingleMovie/>},
    {path:`/:gener` , element:<Tools/>},
    {path:`/search/:searchvalue` , element:<Tools/>}

]





export default MovieRoutes;