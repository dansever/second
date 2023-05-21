import React from "react";
import MainHeader from "../components/Header";
import {useNavigate} from "react-router";
import {Divider, Radio, ConfigProvider} from "antd";
import { Row, Col } from 'antd';
import Navbar from "../components/Navbar";
import UserHeader from "../components/UserComponents";
import {MyShopCard} from "../components/Card";
import {ScrollView} from "react-native";
import styled from "styled-components";


export const PageContainer = styled.div`
  background-color: var(--off_white);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-content: center;
  padding: 80px 30px 100px 30px;
  row-gap: 20px;
`;

function ProfileOptions () {
    const navigate = useNavigate();
    return (
        <Radio.Group style={{scale:"110%" }} buttonStyle={"solid"} size={"large"} defaultValue={"MyShop"}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
        </Radio.Group>
    );
}

export default function MyProfile() {
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
                        fontFamily: "Montserrat",
                    },
                }}
            >
                <MainHeader/>
                <ScrollView>
                <PageContainer>
                    <UserHeader/>
                    <ProfileOptions/>
                    <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>

                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <MyShopCard img={require("../assets/images/i14.jpg")} price={4}/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard img={require("../assets/images/i13.jpg")} price={5}/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard img={require("../assets/images/i12.jpg")} price={4}/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard img={require("../assets/images/i11.jpg")} price={7}/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard img={require("../assets/images/i10.jpg")} price={3}/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard img={require("../assets/images/i9.jpg")} price={4}/>
                        </Col>
                    </Row>

                </PageContainer>
                </ScrollView>
                <Navbar/>
            </ConfigProvider>
        </div>
    );
}