import React from "react"
import "../styles/Index.css"
import HomeHeader, {GeneralHeader} from "../components/Header"
import Feed from "../components/Feed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import styled from "styled-components";
import {ScrollView} from "react-native";
import {Col, ConfigProvider, Divider, Row} from "antd";
import {PageContainer} from "./Profile/Profile_Main";
import UserHeader from "../components/UserComponents";
import {MyShopCard} from "../components/Card";


const HomeContainer = styled.div`
  background-color: var(--light_green);
  width: 100%;
  padding: 60px 20px 80px 20px; 
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

export default function Home() {
    return (
        <div >
            <HomeHeader/>
            <ScrollView>
                <HomeContainer>
                    <SearchBar/>
                    <Feed/>
                </HomeContainer>
            </ScrollView>
            <Navbar/>
        </div>
    );
};