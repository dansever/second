import React from "react";
import {Header_Settings} from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const Container = styled.div`
  background-color: var(--secondary_green);
  height: 100%;
  overflow: auto;
`;

const PageTitle = styled.div`
  position: absolute;
  top: 6px;
  left: 30%;
  font-family: 'Lora', serif;
  font-size: 36px;
`;

export default function MyProfile() {
    return (
        <div>
            <Header_Settings/>
            <Container>
                <PageTitle>My Profile</PageTitle>
            </Container>
        </div>
    )
}