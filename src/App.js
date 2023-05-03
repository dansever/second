import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Profile_Seller from "./pages/Profile/Profile_Seller";
import Profile_MyShop from "./pages/Profile/Profile_MyShop";
import Profile_Saved from "./pages/Profile/Profile_Saved";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import override from "./override.css"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<SignUp/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>



                <Route path="/Search/:id" element={<Product/>}/>
                <Route path="/Upload" element={<Upload/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Profile/Seller" element={<Profile_Seller/>}/>
                <Route path="/Profile/MyShop" element={<Profile_MyShop/>}/>
                <Route path="/Profile/Saved" element={<Profile_Saved/>}/>
            </Routes>
        </BrowserRouter>
    )
}