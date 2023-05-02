import React from "react";
import {Header_Profile} from "../components/Header/Header";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import "./Profile/Profile.css"
import ProfileInfo, {SellerInfo} from "../components/UserInfo/UserInfo"
import {Divider, Radio} from "antd";
import {useNavigate} from "react-router";

const PageTitle = styled.div`
  position: absolute;
  top: 6px;
  left: 30%;
  font-family: 'Lora', serif;
  font-size: 36px;
`;


const PageContainer = styled.div`
    background-color: var(--secondary_green);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    align-content: center;
    height: 90vh;
    padding-top: 15px;
`;

function ProfileOptions () {
    const navigate = useNavigate();
    return (
        <Radio.Group style={{scale:"120%"}}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Saved")} value="Saved">Saved Items</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Seller")} value="Seller">Sellers</Radio.Button>
        </Radio.Group>
    );
}


export default function MyProfile() {
    return (
        <div>
            <Header_Profile/>
            <PageTitle>My Profile</PageTitle>
            <PageContainer>
                <ProfileInfo/>
                <ProfileOptions/>
            </PageContainer>
            <Navbar/>
        </div>
    );
}