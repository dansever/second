import React from "react";
import {GeneralHeader} from "../components/Header";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import "./Profile/Profile.css"
import ProfileInfo, {SellerInfo} from "../components/ProfileContainers/ProfileContainers"
import {Divider, Radio} from "antd";
import {useNavigate} from "react-router";


const Container = styled.div`
  background-color: var(--light_green);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-content: center;
  row-gap: 15px;
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
            <GeneralHeader/>
            <Container>
                <div className={"page-title"}>My Profile</div>
                <ProfileInfo/>
                <ProfileOptions/>
            </Container>
            <Navbar/>
        </div>
    );
}

