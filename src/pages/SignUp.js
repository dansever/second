import React from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from "styled-components";
import {ButtonStyle} from "../components/Buttons/Button";

const Container = styled.div`

`;

const SignUpButton = styled(ButtonStyle)`
  background-color: var(--primary_green);
  font-size: 20px;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SignUp = () => {
    const navigate  = useNavigate ();
    const handleClick = (event) => {
        navigate("/Signup");
    };
    return (
        <Container>
            <div>
                <input placeholder={"Email..."}/>
                <input placeholder={"Password..."}/>
            </div>
            <SignUpButton type="submit"  onClick={handleClick}>Finish</SignUpButton>
        </Container>
    );
};

export default SignUp;
