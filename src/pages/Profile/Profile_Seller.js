import React from "react";
import {GeneralHeader} from "../../components/Header";
import ProfileInfo, {SellerInfo} from "../../components/ProfileContainers/ProfileContainers";
import styled from "styled-components";
import {Divider, Radio, ConfigProvider} from "antd";
import {FilterButton} from "../../components/Buttons/Button";
import {useNavigate} from "react-router";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
    background-color: var(--off_white);
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
        <Radio.Group size={"large"} buttonStyle={"solid"} defaultValue={"Seller"}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
            <Radio.Button  onClick={() => navigate("/Profile/Saved")} value="Saved">Saved Items</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Seller")} value="Seller">Sellers</Radio.Button>
        </Radio.Group>
    );
}
export default function Profile_Seller() {
    return (
        <div>
            <ConfigProvider
                theme= {{
                    token: {
                        colorPrimary: '#749A83',
                        colorPrimaryActive: '#749A83',
                        colorPrimaryHover: "#749A83",
                        colorBorder: "#02110A",
                        colorBgContainer:"#F1F7F1",
                        borderRadiusLG: 26,
                    },
                }}
            >
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
            </ConfigProvider>
        </div>
    );
}