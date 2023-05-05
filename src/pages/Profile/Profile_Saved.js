import React from "react";
import styled from "styled-components";
import {GeneralHeader} from "../../components/Header";
import Navbar from "../../components/Navbar";
import {FilterButton, SortButton} from "../../components/Buttons/Button";
import {useNavigate} from "react-router";
import {Divider, Radio, ConfigProvider} from "antd";
import UserHeader from "../../components/UserComponents";

const PageContainer = styled.div`
  background-color: var(--off_white);
  display: flex;
  flex-direction: column;
  justify-content: start;
  justify-items: flex-start;
  align-items: center;
  align-content: center;
  height: 90vh;
  padding-top: 15px;
  row-gap: 20px;
`;


function ProfileOptions () {
    const navigate = useNavigate();
    return (
        <Radio.Group style={{scale:"120%" }} buttonStyle={"solid"} size={"large"} defaultValue={"Saved"}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Saved")} value="Saved">Saved Items</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Sellers")} value="Sellers">Sellers</Radio.Button>
        </Radio.Group>
    );
}

export default function Profile_Saved() {
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
                    <UserHeader/>
                    <ProfileOptions />
                    <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>
                    <FilterButton/>
                    <SortButton/>
                    <img src={require("../../assets/images/item_cards_for_profile_saved.png")}
                         alt={"placeholder"} style={{scale:"50%"}}/>
                </PageContainer>
                <Navbar/>
            </ConfigProvider>
        </div>
    );
}