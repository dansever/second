import React from "react"
import "../../styles/Index.css"
import "./Search.css"
import {Header_Search} from "../../components/Header/Header"
import ItemCard from "../../components/Card/Card"
import { Link } from "react-router-dom"
import MainFeed from "../../components/Feed/Feed"
import Footer from "../../components/Footer/Footer"
import SearchBar from "../../components/SearchBar/SearchBar";
import {FilterButton} from "../../components/Buttons/Button";
import Sort from "../../components/Sort/Sort";
import styled from "styled-components";

const PageTitle = styled.div`
  position: absolute;
  top: 6px;
  left: 40%;
  font-family: 'Lora', serif;
  font-size: 36px;
  align-content: center;
  align-items: center;
`;

export default function Search() {
    return (
        <div>
            <Header_Search/>
            <PageTitle>Explore items</PageTitle>
            <div className="search-container">
                {/*<h1>Explore second hand items!</h1>*/}
                <SearchBar/>
                <MainFeed/>
            </div>
            <Footer/>
        </div>
    );
};
