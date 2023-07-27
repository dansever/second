import React from "react";
import { useNavigate} from 'react-router-dom';
import "../styles/Index.css";
import styled from "styled-components";
import second_logo from "../assets/Second_logo.png";
import {ArrowLeftOutlined} from "@ant-design/icons";
import Colors from "../color";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown} from 'antd';
import {auth} from "../firebase";


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--secondary_green);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 60px;
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
`;



export default function MainHeader(props) {
    const navigate = useNavigate();


    const handleSignOut = () => {
        auth.signOut();
        // Sign out successful
        console.log('User signed out');
        navigate("/Login");
    }

    const items = [
        {
            label: <a onClick={handleSignOut}>Settings</a>,
            key: '0',
        },
        {
            label: <a onClick={handleSignOut}>Sign Out</a>,
            key: '1',
        },
    ];

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
                    style={{width:"36px", height:"28px"}}
                />
            </TitleAndLogo>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                className={"user_info_dropdown"}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <p style={{fontSize:"14px", padding:"5px"}}>
                        Hi {props.name}
                        <DownOutlined style={{padding:"5px"}}/>
                    </p>
                </a>
            </Dropdown>
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
}