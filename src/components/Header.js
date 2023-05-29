import React, {useContext} from "react";
import {Link, useNavigate} from 'react-router-dom';
import "../styles/Index.css";
import styled from "styled-components";
import second_logo from "../assets/Second_logo.png";
import {ArrowLeftOutlined, CheckCircleOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import Colors from "../color";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {getAuth} from "firebase/auth";
import {auth} from "../firebase";
import {AuthContext} from "./AuthProvider";


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
            label: <a onClick={handleSignOut}>Sign Out</a>,
            key: '0',
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
                    <p style={{fontSize:"12px"}}>
                        {props.email}
                        <DownOutlined />
                    </p>
                </a>
            </Dropdown>
            {/*{props.email ? (*/}
            {/*    <p*/}
            {/*        style={{color: Colors.dark_green,*/}
            {/*            display: "flex",*/}
            {/*            flexDirection:"row",*/}
            {/*            columnGap:"5px",*/}
            {/*            fontSize:"12px",*/}
            {/*            alignItems:"center"*/}
            {/*        }}>*/}
            {/*        <CheckCircleOutlined style={{scale:"150%"}} />*/}
            {/*        {props.email}*/}
            {/*    </p>*/}
            {/*) : (*/}
            {/*    <p*/}
            {/*        style={{color: "darkred",*/}
            {/*            display: "flex",*/}
            {/*            flexDirection:"row",*/}
            {/*            columnGap:"5px",*/}
            {/*            fontSize:"12px",*/}
            {/*            alignItems:"center"*/}
            {/*        }}>*/}
            {/*        <ExclamationCircleOutlined style={{scale:"150%"}} />*/}
            {/*        Not signed in*/}
            {/*    </p>*/}
            {/*)}*/}
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