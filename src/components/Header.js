import React from "react";
import { useNavigate} from 'react-router-dom';
import "../styles/Index.css";
import styled from "styled-components";
// import second_logo from "../assets/Second_logo.png";
import white_logo from "../assets/images/white_logo.png";
import {ArrowLeftOutlined} from "@ant-design/icons";
import Colors from "../color";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, ConfigProvider} from 'antd';
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
                    src={white_logo}
                    alt={white_logo}
                    style={{width:"45px", height:"40px"}}
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
                    <p style={{color: Colors.background_white,
                        fontSize:"16px",
                        padding:"5px"}}>
                        Hi {props.name}!
                        <DownOutlined style={{padding:"5px"}}/>
                    </p>
                </a>
            </Dropdown>
        </HeaderContainer>
    );
};