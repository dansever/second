import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import "../styles/Login.css"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import {Button, Input, ConfigProvider, theme} from "antd";
import logo from "../assets/Second_logo.png"
import styled from "styled-components";
import Colors from "../color.js";
import {ButtonStyle} from "../components/Button";

const Picture = styled.img`
    height: 30%;
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
        navigate("/Signup");
    };

    return (
        <div className={"main-container"}>
            <Picture src={logo}/>
            <header><h1>Welcome Back!</h1></header>
            {error && <p
                style={{color: 'red'}}>{error}</p>}

            <form onSubmit={handleLogin}>
                <ConfigProvider
                    theme={{
                        "token": {
                            "colorPrimaryBorder": "#11998E",
                            "colorPrimaryBorderHover": "#11998E",
                            "colorPrimaryHover": "#11998E",
                            "colorPrimary": "#11998E",
                            "wireframe": false
                        },
                    }}
                >
                <Input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} class={"input-style"}/>
                <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    class={"input-style"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </ConfigProvider>
                <ButtonStyle
                    className={"submit-button"}
                    type="submit">
                    Login
                </ButtonStyle>
            </form>
            <div className={"new-user"}>
                <p>Don't have an account?</p>
                <button
                    className={"sign-up-button"}
                    onClick={handleSignup}>
                    Sign Up
                </button>
            </div>

        </div>
    )
}
export default LoginPage;