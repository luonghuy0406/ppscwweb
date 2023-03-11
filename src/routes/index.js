import AboutUs from '../pages/AboutUs';
import Brand from '../pages/Brand';
import ChildBrand from '../pages/Brand/ChildBrand';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import ChildProduct from '../pages/Products/ChildProduct';
import Service from '../pages/Service';

// public view
const publicRoutes = [
    {path:'/',component:Home,label:"Home"},    
    {path:'/about',component:AboutUs,label:"About us"},
    {path:'/product',component:Products,label:"Product"},
    {path:'/brand',component:Brand,label:"Brand"},
    {path:'/service',component:Service,label:"Service"},
    {path:'/brand/:id',component:ChildBrand},
    {path:'/product/:id',component:ChildProduct},
    {path:'/404',component:NotFound,label:"404",layout:null},
    {path:'*',component:NotFound,layout:null},
    // {path:'/product',component:Products, layout: null,label:"Product"},
]

//need to login
const privateRoutes = [

]

export {publicRoutes,privateRoutes}