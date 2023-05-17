import React from "react";
import MainHeader from "../../components/Header";
import Navbar from "../../components/Navbar";
import {useNavigate} from "react-router";
import {Divider, Radio, ConfigProvider} from "antd";
import UserHeader from "../../components/UserComponents";
import Grid from "@mui/material/Grid";
import MainCard from "../../components/Card";
import {PageContainer} from "./Profile_Main";
import {ScrollView} from "react-native";


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
                    fontFamily: "Montserrat",
                },
            }}
                >
                <MainHeader/>
                <PageContainer>
                    <UserHeader/>
                    <ProfileOptions />
                    <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>
                    <ScrollView>
                        <Grid container spacing={{xs: 2, lg: 2}} columns={{xs: 4, sm: 4, md: 9, lg: 12}}>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <MainCard isLiked = {true} img={require("../../assets/images/i1.jpg")} size={"38"} location={"0.3K"} price={4}/>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <MainCard isLiked = {true} img={require("../../assets/images/i2.jpg")} size={"38"} location={"0.3K"} price={4}/>
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <MainCard isLiked = {true} img={require("../../assets/images/i2.jpg")} size={"38"} location={"0.3K"} price={4}/>
                            </Grid>
                        </Grid>
                    </ScrollView>
                </PageContainer>
                <Navbar/>
            </ConfigProvider>
        </div>
    );
}