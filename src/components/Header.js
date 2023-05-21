import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Index.css";
import styled from "styled-components";
import second_logo from "../assets/images/second-logo.png";
import {ArrowLeftOutlined, CheckCircleOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import Colors from "../color"



const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--secondary_green);
  position: fixed;
  width: 100%;
  top: 0;
  //left: 0;
  //right: 0;
  z-index: 1;
  height: 60px;
  //justify-content: space-between;
  //align-items: center;
  //column-gap: 100px;
  padding-left: 15px;
  padding-right: 5px;
  align-items: center;
  justify-content: space-between;

`;

const TitleAndLogo = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  align-items: center;
  //align-content: center;
  //justify-content: center;
  //justify-items: center;
`;



export function Logo() {
    return (
        <div style={{display:"flex",
            flexDirection:"row",
            alignItems:"center"}}>
            <img src={second_logo} alt={second_logo}
                 style={{width:"80px",
                     height:"80px"}}/>
        </div>
    );
}

export default function MainHeader(props) {
    return (
        <HeaderContainer>
            <TitleAndLogo>
                <h3
                    style={{
                        color: Colors.dark_green,
                        fontSize:"32px"}}>
                    second
                </h3>
                <img
                    src={second_logo}
                    alt={second_logo}
                    style={{width:"100px", height:"80px"}}
                />
            </TitleAndLogo>

            {props.email ? (
                <p
                    style={{color: Colors.dark_green,
                        display: "flex", flexDirection:"row",
                        columnGap:"5px"}}>
                    <CheckCircleOutlined style={{scale:"150%"}} />
                    {props.email}
                </p>
            ) : (
                <p
                    style={{color: "darkred",
                        display: "flex", flexDirection:"row",
                        columnGap:"5px"}}>
                    <ExclamationCircleOutlined style={{scale:"150%"}} />
                    Not signed in
                </p>
            )}
        </HeaderContainer>
    );
};

export function SecondaryHeader() {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <ArrowLeftOutlined className={"btn"}
                               style={{fontSize: '36px' }}
                               onClick={() => navigate(-1)}/>
                <img src={second_logo} alt={second_logo}
                     style={{width:"100px", height:"80px"}}/>
        </HeaderContainer>
    );
};