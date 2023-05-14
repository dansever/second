import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Index.css";
import styled from "styled-components";
import second_logo from "../assets/images/second-logo.png";
import {ArrowLeftOutlined} from "@ant-design/icons";
import Colors from "../color"



const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 60px;
  background-color: var(--secondary_green);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 100px;
  padding-left: 15px;
`;


export function Logo() {
    return (
        <div style={{display:"flex",
            flexDirection:"row",
            alignItems:"center"}}>
            <img src={second_logo} alt={second_logo}
                 style={{width:"100px",
                     height:"80px"}}/>
        </div>
    );
}

export default function HomeHeader() {
    return (
        <Container>
            <h3 style={{color: Colors.dark_green, fontSize:"32px"}}>second</h3>
            <img src={second_logo} alt={second_logo}
                 style={{width:"100px", height:"80px"}}/>
        </Container>
    );
};

export function GeneralHeader() {
    const navigate = useNavigate();
    return (
        <Container>
            <ArrowLeftOutlined className={"btn"}
                               style={{fontSize: '36px' }}
                               onClick={() => navigate(-1)}/>
                <img src={second_logo} alt={second_logo}
                     style={{width:"100px", height:"80px"}}/>
        </Container>
    );
};