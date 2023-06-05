import React, {useContext, useEffect, useState} from "react"
import "../styles/Index.css"
import "../styles/Home.css"
import MainFeed from "../components/MainFeed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";


export default function Home() {
    const [userNeighborhood, setUserNeighborhood] = useState('');
    const currentUser = useContext(AuthContext);
    const CurrentUserRef = doc(db, 'users', currentUser.uid);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )}

            <div className={"home-container"}>
                <SearchBar defaultNeighborhood={userNeighborhood} />
                <MainFeed/>
            </div>
            <Navbar/>
        </div>
    );
};