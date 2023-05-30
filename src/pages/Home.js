import React, {useContext, useEffect, useState} from "react"
import "../styles/Index.css"
import "../styles/Home.css"
import MainFeed from "../components/MainFeed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import styled from "styled-components";
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";


export default function Home() {
    const currentUser = useContext(AuthContext);
    const [userNeighborhood, setUserNeighborhood] = useState('');

    const getUserNeighborhood = async () => {
        try {
            const CurrentUserRef = doc(db, 'users', currentUser.uid);
            const docSnapshot = await getDoc(CurrentUserRef);
            setUserNeighborhood(docSnapshot.data()['neighborhood']);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getUserNeighborhood();
    }, []);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )}
            <div className={"home-container"}>
                <SearchBar />
                <MainFeed/>
            </div>
            <Navbar/>
        </div>
    );
};