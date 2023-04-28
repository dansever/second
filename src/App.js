import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans";
import Cart from "./pages/Cart/Cart";
import Logo from "./components/Logo";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Upload from "./pages/Upload/Upload";
import MyProfile from "./pages/Profile/MyProfile";

export default function App() {
    return (
        <BrowserRouter>
            <Footer/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Vans" element={<Vans/>}/>
                <Route path="/Upload" element={<Upload/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Profile" element={<MyProfile/>}/>
            </Routes>
        </BrowserRouter>
    )
}