import React from "react";
import {GeneralHeader} from "../../components/Header";
import styled from "styled-components";
import {useNavigate} from "react-router";
import {Divider, Radio, ConfigProvider} from "antd";
import { Row, Col } from 'antd';
import Navbar from "../../components/Navbar";
import UserHeader from "../../components/UserComponents";
import {MyShopCard} from "../../components/Card/Card";


const PageContainer = styled.div`
    background-color: var(--off_white);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    align-content: center;
    height: 90vh;
    padding-top: 15px;
    row-gap: 20px;
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
        <Radio.Group style={{scale:"120%" }} buttonStyle={"solid"} size={"large"} defaultValue={"MyShop"}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Saved")} value="Saved">Saved Items</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Sellers")} value="Sellers">Sellers</Radio.Button>
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
                    <UserHeader/>
                    <ProfileOptions/>
                    <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>

                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <MyShopCard/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard/>
                        </Col>
                        <Col span={12}>
                            <MyShopCard/>
                        </Col>
                    </Row>

                </PageContainer>
                <Navbar/>
            </ConfigProvider>
        </div>
    );
}