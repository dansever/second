import React from "react";
import {GeneralHeader} from "../../components/Header";
import styled from "styled-components";
import ProfileInfo from "../../components/ProfileContainers/ProfileContainers";
import {useNavigate} from "react-router";
import {Divider, Radio, ConfigProvider} from "antd";
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

const profileOptionsStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 10vh;
`;
function ProfileOptions () {
    const navigate = useNavigate();
    return (
        <Radio.Group size={"large"} buttonStyle={"solid"} defaultValue={"MyShop"}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
            <Radio.Button  onClick={() => navigate("/Profile/Saved")} value="Saved">Saved Items</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Seller")} value="Seller">Sellers</Radio.Button>
        </Radio.Group>
    );
}

export default function Profile_MyShop() {
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
                </PageContainer>
                <Navbar/>
            </ConfigProvider>
        </div>
    );
}
