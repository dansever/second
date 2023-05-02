import React from "react";
import {GeneralHeader} from "../../components/Header";
import styled from "styled-components";
import ProfileInfo from "../../components/UserInfo/UserInfo";
import {useNavigate} from "react-router";
import {Divider, Radio} from "antd";
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

export default function Profile_MyShop() {
    return (
        <div>
            <GeneralHeader/>
            <PageContainer>
                <ProfileInfo/>
                <ProfileOptions/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>
            </PageContainer>
            <Navbar/>
        </div>
    );
}


