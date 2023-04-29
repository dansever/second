import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Logo from "./components/Logo";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Search from "./pages/Search/Search";
import MainFeed from "./components/Feed/Feed"

export default function App() {
    return (
        <BrowserRouter>
            {/*<Footer/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Search" element={<Search/>}/>
                <Route path="/Search/:id" element={<Product/>}/>
                <Route path="/Upload" element={<Upload/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}