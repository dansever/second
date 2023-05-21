import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import Product from "./pages/Product";
import LoginPage from "./pages/Login";
import Profile_MyShop from "./pages/Profile/Profile_MyShop";
import Profile_Saved from "./pages/Profile/Profile_Saved";
import Profile_Seller from "./pages/Profile/Profile_Sellers";
import SignUp from "./pages/SignUp";
import CardPage from "./pages/CardPage";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/CardPage" element={<CardPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Signup" element={<SignUp/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Search/:id" element={<Product/>}/>
                <Route path="/Upload" element={<Upload/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Profile/MyShop" element={<Profile_MyShop/>}/>
                <Route path="/Profile/Sellers" element={<Profile_Seller/>}/>
                <Route path="/Profile/Saved" element={<Profile_Saved/>}/>
            </Routes>
        </BrowserRouter>
    )
}