import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Products from '../pages/Products';

// public view
const publicRoutes = [
    {path:'/',component:Home,label:"Home"},    
    {path:'/about',component:AboutUs,label:"About us"},
    {path:'/product',component:Products, layout: null,label:"Product"},
]

//need to login
const privateRoutes = [

]

export {publicRoutes,privateRoutes}