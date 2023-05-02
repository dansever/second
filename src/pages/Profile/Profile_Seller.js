import React from "react";
import {GeneralHeader} from "../../components/Header";
import ProfileInfo, {SellerInfo} from "../../components/UserInfo/UserInfo";
import styled from "styled-components";
import {Divider, Radio} from "antd";
import {FilterButton} from "../../components/Buttons/Button";
import {useNavigate} from "react-router";
import Navbar from "../../components/Navbar";

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

export default function Profile_Seller() {
    return (
        <div>
            <GeneralHeader/>
            <PageContainer>
                <ProfileInfo/>
                <ProfileOptions/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>
                <SellerInfo/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'transparent' }}/>
                <SellerInfo/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'transparent' }}/>
                <SellerInfo/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'transparent' }}/>
                <SellerInfo/>
            </PageContainer>
            <Navbar/>
        </div>
    );
}