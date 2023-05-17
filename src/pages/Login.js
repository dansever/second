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
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 4px;
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

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate  = useNavigate ();

    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    };

    const goToSignUp = () => {
        navigate("/Signup");
    };

    return (
        <Container>
            <header> <h2 >Welcome to Second</h2> <Logo/> </header>

            <Form>
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
            <ButtonStyle onClick={signIn}>Sign In</ButtonStyle>
            <br />

            <div className={"sign_up_div"}>
                <p>New to second?</p>
                <h4 onClick={goToSignUp}>Sign Up</h4>
            </div>
        </Container>
    );
};

export default Auth;
