import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Products from '../pages/Products';

// public view
const publicRoutes = [
    {path:'/',component:Home},    
    {path:'/about',component:AboutUs},
    {path:'/product',component:Products, layout: null},
]

//need to login
const privateRoutes = [

]

export {publicRoutes,privateRoutes}