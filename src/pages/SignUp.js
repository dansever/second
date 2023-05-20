import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import "../styles/Index.css"
import "../styles/Login.css"
import styled from "styled-components";
import {ButtonStyle} from "../components/Buttons/Button";
import {Logo} from "../components/Header";
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubmitButton = styled(ButtonStyle)`
  background-color: var(--primary_green);
  font-size: 20px;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const LabelStyle = styled.label`
  font-weight: 600;
  justify-content: left;
`;

const InputStyle = styled.input`
  border-radius: 4px;
  background-color: var(--off_white);
  border: 1px solid var(--text_color);
  width: 100%;
  font-size: medium;
`;

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate  = useNavigate ();

    const Submit = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
        navigate("/Home");
    };

    return (
        <Container>

            <Form>
                <header> <h2 >Welcome to Second!</h2> <Logo/> </header>
                <h3>To sign up, please enter your email address and password:</h3>
                <LabelStyle>Email</LabelStyle>
                <InputStyle
                    onChange={(e) => setEmail(e.target.value)} />
                <br />
                <LabelStyle>Password</LabelStyle>
                <InputStyle
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </Form>

            <br /><br />
            <SubmitButton onClick={Submit}>Finish</SubmitButton>
            <br />

        </Container>
    );
};

export default SignUp;
