import React from "react";
import styled from "styled-components";
import {Header_Search} from "../../components/Header/Header";
import ProfileInfo from "../../components/UserInfo/UserInfo";
import Navbar from "../../components/Navbar";
import {FilterButton, SortButton} from "../../components/Buttons/Button";
import {useNavigate} from "react-router";
import {Divider, Radio} from "antd";

const PageContainer = styled.div`
  background-color: var(--secondary_green);
  display: flex;
  flex-direction: column;
  justify-content: start;
  justify-items: flex-start;
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

export default function Profile_Saved() {
    return (
        <div>
            <Header_Search/>
            <PageContainer>
                <ProfileInfo/>
                <ProfileOptions/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>
                <FilterButton/>
                <SortButton/>
                <img src={require("../../assets/images/item_cards_for_profile_saved.png")}
                     alt={"placeholder"} style={{scale:"50%"}}/>
            </PageContainer>
            <Navbar/>
        </div>
    );
}