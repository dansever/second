import React, {useContext, useEffect, useState} from "react"
import "../styles/Index.css"
import Feed from "../components/Feed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import styled from "styled-components";
import {ScrollView} from "react-native";
import MainHeader from "../components/Header";
import {auth} from "../firebase";
import { AuthContext } from '../components/AuthProvider';


const HomeContainer = styled.div`
  background-color: var(--light_green);
  width: 100%;
  padding: 60px 5px 80px 5px; 
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

export default function Home() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )}
            <HomeContainer>
                <SearchBar/>
                <Feed/>
            </HomeContainer>
            <Navbar/>
        </div>
    );
};