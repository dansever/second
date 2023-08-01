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

    const HeaderContainer = styled.div`
      display: flex;
      flex-direction: row;
      background-image: linear-gradient(to top left, ${Colors.green}, ${Colors.light_green} );
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
                        color: Colors.background_white,
                        fontSize:"32px"}}>
                    Second
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

export function SecondaryHeader(props) {
    const HeaderContainer = styled.div`
      display: flex;
      flex-direction: row;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1;
      height: 60px;
      padding-left: 15px;
      padding-right: 5px;
      align-items: center;
      justify-content: space-between;
      border-bottom: var(--green) 1px solid;
      //box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      margin-bottom: -3px;
      background-image: linear-gradient(to top left, ${Colors.green}, ${Colors.light_green} );
    `;
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