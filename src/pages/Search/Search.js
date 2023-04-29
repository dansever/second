import React from "react"
import "../../styles/Index.css"
import "./Search.css"
import {Header_Search} from "../../components/Header/Header"
import ItemCard from "../../components/Card/Card"
import { Link } from "react-router-dom"
import MainFeed from "../../components/Feed/Feed"
import Footer from "../../components/Footer/Footer"


export default function Search() {
    return (
        <div>
            <Header_Search/>
            <div className="search-container">
                <h1>Explore second hand items!</h1>
                <MainFeed/>
            </div>
            <Footer/>
        </div>
    );
};
