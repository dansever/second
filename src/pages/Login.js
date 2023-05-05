import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import "../styles/Index.css"
import styled from "styled-components";
import {ButtonStyle} from "../components/Buttons/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`;

const LoginButton = styled(ButtonStyle)`
  background-color: var(--primary_green);
  font-size: 20px;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 4px;
`;

const LabelStyle = styled.label`
  font-weight: 600;
  font-family: "Montserrat" sans-serif;
  justify-content: left;
`;

const InputStyle = styled.input`
  border-radius: 4px;
  background-color: var(--off_white);
  border: 1px solid var(--text_color);
  width: 160px;
  font-family: "Montserrat", sans-serif;
  font-size: medium;
  align-items: left;
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
            <Form onSubmit={handleSubmit}>
                <LabelStyle>
                    Username
                </LabelStyle>
                <InputStyle type="text" value={username} onChange={handleUsernameChange} />
                <br />
                <LabelStyle>
                    Password
                </LabelStyle>
                <InputStyle type="password" value={password} onChange={handlePasswordChange} />

                <br /><br /><br /><br />
                <LoginButton type="submit">Log In</LoginButton>
            </Form>
        </Container>
    );
};

export default Login;
