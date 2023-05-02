import React from "react"
import "../styles/Index.css"
import Header from "../components/Header"
import MainFeed from "../components/Feed/Feed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import styled from "styled-components";


const HomeContainer = styled.div`
  background-color: var(--light_green);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export default function Home() {
    return (
        <div>
            <Header/>
            <HomeContainer>
                <SearchBar/>
                <MainFeed/>
            </HomeContainer>
            <Navbar/>
        </div>
    );
};
