import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Liked";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import Product from "./pages/Product";
import LoginPage from "./pages/Login";
import MyProfile from "./pages/Profile";
import SignUp from "./pages/SignUp";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Signup" element={<SignUp/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Search/:id" element={<Product/>}/>
                <Route path="/Upload" element={<Upload/>}/>
                <Route path="/Liked" element={<Cart/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Profile" element={<MyProfile/>}/>
            </Routes>
        </BrowserRouter>
    )
}