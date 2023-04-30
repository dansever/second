import React from "react";
import "../../styles/Index.css";
import "./Header.css";
import styled from "styled-components";
import {ArrowLeftOutlined, SettingFilled, BellOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import { BiHome } from "react-icons/bi";
import second_logo from "../../assets/images/second-logo.png";


const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--primary_green);
  display: flex;
  align-items: center;
  padding-right: 10px;
`;


export function Logo() {
    return (
        <div style={{display:"flex",
            flexDirection:"row",
            alignItems:"center"}}>
            <img src={second_logo} alt={second_logo}
                 style={{width:"70px",
                     height:"50px"}}/>
            <h3>.second</h3>
        </div>
    );
}

export default function Header_Home() {
    return (
        <HeaderContainer>
            <Link to="/" style={{color: "black", marginRight: "auto",
                fontWeight: "900", fontSize: "25px"}}>
                <Logo/>
            </Link>
            <BellOutlined style={{scale:"200%"}}/>
        </HeaderContainer>
    );
};

export function Header_Search() {
    return (
        <HeaderContainer>
            <ArrowLeftOutlined className={"btn"}
                               style={{fontSize: '36px' }}/>
        </HeaderContainer>
    );
};

export function Header_Product() {
    return (
        <HeaderContainer>
            <Link to="/Search">
                <ArrowLeftOutlined className={"btn"}
                                   style={{fontSize: '36px'}} color={"black"}/>
            </Link>
        </HeaderContainer>
    );
};


export function Header_Upload() {
    return (
        <HeaderContainer>
            <ArrowLeftOutlined className={"btn"}
                               style={{fontSize: '36px' }}/>
        </HeaderContainer>
    );
};


export function Header_Profile () {
    return (
        <HeaderContainer style={{display: "flex",
            justifyContent: "flex-end"}}>
            <SettingFilled className={"btn"}
                           style={{fontSize: '36px'}}/>
        </HeaderContainer>
    );
};