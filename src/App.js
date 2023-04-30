import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Search from "./pages/Search/Search";
import Login from "./pages/Login";
import Profile_Seller from "./pages/Profile/Profile_Seller";
import Profile_MyShop from "./pages/Profile/Profile_MyShop";
import Profile_Saved from "./pages/Profile/Profile_Saved";


import {Radio} from "antd";
export default function App() {
    return (
        <BrowserRouter>
            {/*<Footer/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Search" element={<Search/>}/>
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