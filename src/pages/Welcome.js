import React from "react"
import {Logo} from "../components/Header";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ButtonStyle} from "../components/Buttons/Button";

const Container = styled.div`
  background-color: var(--light_green);
  height: 60%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 20px;
`;


const SignUp = styled(ButtonStyle)`
  color: var(--primary_green);
  border-color: var(--primary_green);
  box-shadow: 2px 3px 0 0 var(--primary_green);
`;

export default function Welcome () {
    return (
        <div>
            <Container>
                <h1>Welcome to Second</h1>
                <Logo/>
                <div style={{display:"flex",flexDirection:"row", columnGap:"20px"}}>
                    <Link to={"/Login"}>
                        <ButtonStyle>Log In</ButtonStyle>
                    </Link>
                    <Link to={"/SignUp"}>
                        <SignUp>Sign Up</SignUp>
                    </Link>
                </div>
            </Container>
        </div>
    )
}