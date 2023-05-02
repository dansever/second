import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {ButtonStyle} from "../components/Buttons/Button";

const Container = styled.div`
  background-color: var(--light_green);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`;

const SignUpButton = styled(ButtonStyle)`
  color: var(--primary_green);
  border-color: var(--primary_green);
  box-shadow: 2px 3px 0 0 var(--primary_green);
`;

const SignUp = () => {
    return (
        <Container>
            <Link to={"/Home"}>
                <SignUpButton>Sign Up</SignUpButton>
            </Link>
        </Container>
    );
};

export default SignUp;
