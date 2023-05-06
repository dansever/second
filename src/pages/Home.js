import React from "react"
import "../styles/Index.css"
import Header from "../components/Header"
import Feed from "../components/Feed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import styled from "styled-components";
import {ScrollView} from "react-native";


const HomeContainer = styled.div`
  background-color: var(--light_green);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 60vh;
`;

export default function Home() {
    return (
        <div>
            <Header/>
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
