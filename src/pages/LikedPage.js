import React, {useContext} from "react"
import "../styles/Index.css"
import MainFeed from "../components/MainFeed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import styled from "styled-components";
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import LikedFeed from "../components/LikedFeed"

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

export default function LikedPage() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )}
            <HomeContainer>
                <SearchBar/>
                <LikedFeed/>
            </HomeContainer>
            <Navbar/>
        </div>
    );
};