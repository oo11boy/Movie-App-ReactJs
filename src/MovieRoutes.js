

import Home from "./Pages/Home/Home";
import SingleGener from "./Pages/SingleGener/SingleGener";
import SingleMovie from "./Pages/SingleMovie";

 let MovieRoutes=[
    {path:'/' , element:<Home/>},
    {path:`/:movie/:id/:name` , element:<SingleMovie/>},
    {path:`/:gener` , element:<SingleGener/>},

]





export default MovieRoutes;