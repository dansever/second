import React, {useContext, useEffect, useState} from "react"
import "../styles/Index.css"
import "../styles/Home.css"
import MainFeed from "../components/MainFeed"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import {db} from "../firebase";
import {doc, onSnapshot} from "firebase/firestore";

export default function Home() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )}
            <div className={"home-container"}>
                <MainFeed/>
            </div>
            <Navbar/>
        </div>
    );
};