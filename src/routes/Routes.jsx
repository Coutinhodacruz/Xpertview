import '../index.css'
import HomeLayout from '../pages/layouts/HomeLayout';
import Register from "../register/Register";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Training from '../pages/train/Training';
import Coaching from "../pages/coaching/Coaching";
import Short from "../pages/blog/Short";
import Comfort from "../pages/blog/Comfort";
import Deal from "../pages/blog/Deal";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
export const ROUTES = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/training' element={<Training/>}/>
            <Route path='/' element={<HomeLayout/>}/>
            <Route path="/home" element={<HomeLayout/>}/>
            < Route path="/register" element={<Register/>}/>
            <Route path='/coaching' element={<Coaching/> }/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/deal' element={<Deal/>}/>
            <Route path='/comfort' element={<Comfort/>}/>
            <Route path='/short' element={<Short/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </>
    )
);