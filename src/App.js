import React, { useEffect, useState } from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import LoginPage from "./pages/Login";
import MyProfile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import AuthProvider from './components/AuthProvider';
import Onboarding from "./pages/Onboarding";
import LikedPage from "./pages/LikedPage";
import {SignUpFriendCode} from "./pages/FriendCode";

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
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/JoinTheCommunity" element={<SignUpFriendCode />} />
                    <Route path="/Onboarding" element={<Onboarding />} />
                    <Route path="/Signup" element={<SignUp />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Upload" element={<Upload />} />
                    <Route path="/LikedPage" element={<LikedPage />} />
                    <Route path="/Profile" element={<MyProfile />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}