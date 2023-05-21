import React, {useEffect, useState} from "react"
import "../styles/Index.css"
import Feed from "../components/Feed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import styled from "styled-components";
import {ScrollView} from "react-native";
import MainHeader from "../components/Header";
import {auth} from "../firebase";


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
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        // Subscribe to the Firebase Auth state changes
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                setUserEmail(authUser.email);
            } else {
                // User is signed out
                setUserEmail(null);
            }
        });
        },[]);

    return (
        <div>
            <MainHeader email={userEmail}/>
            <HomeContainer>
                <SearchBar/>
                <Feed/>
            </HomeContainer>
            <Navbar/>
        </div>
    );
};