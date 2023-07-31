import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import "../styles/Login.css"
import { auth } from "../firebase"

import { signInWithEmailAndPassword } from "firebase/auth";
import {Button, Input} from "antd";
import logo from "../assets/Second_logo.png"
import styled from "styled-components";

const Picture = styled.img`
    height: 30%;
    object-fit: cover;
`;
export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/Home");
        } catch (error) {
            setError('Invalid credentials. Try again.');
        }
    };

    const handleSignup = () => {
        // Redirect to signup page
        // navigate("/Signup");
        navigate("/JoinTheCommunity");
    };

    return (
        <div className={"main-container"}>
            <Picture src={logo}/>
            <header><h1>Welcome Back!</h1></header>
            {error && <p
                style={{color: 'red'}}>{error}</p>}

            <form onSubmit={handleLogin}>
                <Input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className={"submit-button"}
                    type="submit">
                    Login
                </button>
            </form>
            <div className={"new-user"}>
                <p>Don't have an account?</p>
                <Button
                    className={"sign-up-button"}
                    onClick={handleSignup}>
                    Sign Up
                </Button>
            </div>

        </div>
    )
}
export default LoginPage;