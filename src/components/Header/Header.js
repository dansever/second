import React from "react";
import "../../styles/Index.css";
import "./Header.css";
import styled from "styled-components";
import {ArrowLeftOutlined, SettingFilled, BellOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Logo from "../Logo";


const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--primary_green);
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export default function Header_Home() {
    return (
        <Container>
            <Link className="site-logo" to="/">
                <Logo/>
            </Link>
            <BellOutlined style={{scale:"200%"}}/>
            {/*<nav>*/}
            {/*    <Link to="/About">About</Link>*/}
            {/*    <Link to="/Contact">Contact</Link>*/}
            {/*</nav>*/}
        </Container>
    );
};

export function Header_Search() {
    return (
        <Container>
            {/*// style={{*/}
            {/*// justifyContent: "flex-start",*/}
            {/*// paddingLeft: "10px"}}>*/}
            <ArrowLeftOutlined className={"btn"}
                               style={{fontSize: '36px' }}/>
        </Container>
    );
};

export function Header_Upload() {
    return (
        <Container>
            <ArrowLeftOutlined className={"btn"}
                               style={{fontSize: '36px' }}/>
        </Container>
    );
};


export function Header_Profile () {
    return (
        <Container style={{display: "flex",
            justifyContent: "flex-end"}}>
            <SettingFilled className={"btn"}
                           style={{fontSize: '36px'}}/>
        </Container>
    );
};