import React, { useEffect, useState } from "react";
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import Product from "./pages/Product";
import LoginPage from "./pages/Login";
import MyProfile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import AuthProvider from './components/AuthProvider';
import Onboarding from "./pages/OnBoarding";

export default function App() {
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [hasLoggedIn, setHasLoggedIn] = useState(false);

    useEffect(() => {
        const hasShownOnboarding = localStorage.getItem('hasShownOnboarding');
        if (!hasShownOnboarding) {
            setShowOnboarding(true);
            localStorage.setItem('hasShownOnboarding', 'true');
        } else {
            setHasLoggedIn(true); // Set this to true if the user has already logged in
        }
    }, []);

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {showOnboarding && <Route path="/" element={<Onboarding />} />}
                    {hasLoggedIn ? (
                        <>
                            <Route path="/" element={<Navigate to="/Login" />} />
                            <Route path="/Login" element={<LoginPage />} />
                            <Route path="/Signup" element={<SignUp />} />
                            <Route path="/Home" element={<Home />} />
                            <Route path="/Search/:id" element={<Product />} />
                            <Route path="/Upload" element={<Upload />} />
                            <Route path="/Liked" element={<Liked />} />
                            <Route path="/Contact" element={<Contact />} />
                            <Route path="/Profile" element={<MyProfile />} />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/Login" element={<LoginPage />} />
                            <Route path="/Signup" element={<SignUp />} />
                            <Route path="/Home" element={<Home />} />
                            <Route path="/Search/:id" element={<Product />} />
                            <Route path="/Upload" element={<Upload />} />
                            <Route path="/Liked" element={<Liked />} />
                            <Route path="/Contact" element={<Contact />} />
                            <Route path="/Profile" element={<MyProfile />} />
                        </>
                    )}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}