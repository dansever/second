import React, {useContext} from "react"
import "../styles/Index.css"
import "../styles/Home.css"
import Feed_Main from "../components/Feed_Main"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import Colors from "../color.js";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";

export default function Home() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader color={Colors.baby_pink} name={userName}/> )
                :
                ( <MainHeader  color={Colors.baby_pink}   name={null}/> )}
            <div className={"home-container"}>
                {/*<SearchBar defaultNeighborhood={userNeighborhood}  />*/}
                <Feed_Main/>
            </div>
            <Navbar/>
        </div>
    );
};