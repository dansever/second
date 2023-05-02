import React from "react";
import "../styles/Index.css";
import styled from "styled-components";
import second_logo from "../assets/images/second-logo.png";
import Colors from "../color"

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--secondary_green);
  display: flex;
  align-items: center;
  padding-right: 10px;
  column-gap: 100px;
`;


const PageTitleContainer = styled.div`
  display:flex;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto; `;

export function Logo() {
    return (
        <div style={{display:"flex",
            flexDirection:"row",
            alignItems:"center"}}>
            <img src={second_logo} alt={second_logo}
                 style={{width:"70px",
                     height:"50px"}}/>
        </div>
    );
}

export default function HomeHeader() {
    return (
        <HeaderContainer>
            <Logo/>
            <PageTitleContainer>
                <h3 style={{color: "darkgray", fontSize:"32px"}}>Welcome to </h3>
                <h3 style={{color: Colors.dark_green, fontSize:"32px"}}>second</h3>
            </PageTitleContainer>
        </HeaderContainer>
    );
};

export function GeneralHeader() {
    return (
        <HeaderContainer>
            <Logo/>
        </HeaderContainer>
    );
};