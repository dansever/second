import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import "../styles/Index.css"
import styled from "styled-components";
import {ButtonStyle} from "../components/Buttons/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate  = useNavigate ();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        // Here, you can add logic to send the login credentials to a server for validation
        navigate("/Home");
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Log In</button>
            </form>
        </Container>
    );
};

export default Login;
