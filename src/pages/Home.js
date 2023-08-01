import React, {useContext, useState, useEffect} from "react"
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
    const [userName, setUserName] = useState("");


    const getUserName = async () => {
        const userId = currentUser.uid;
        const UserRef = doc(db, 'users', userId);
        const docSnap = await getDoc(UserRef);
        return docSnap.data().first_name;
    };

    getUserName().then( result => { setUserName(result)});

    return (
        <div>

            {currentUser ?
                (<MainHeader color={Colors.background_white} name={userName}/> )
                :
                ( <MainHeader  color={Colors.background_white}  name={null}/> )}
            <div className={"home-container"}>
                {/*<SearchBar defaultNeighborhood={userNeighborhood}  />*/}
                <Feed_Main/>
            </div>
            <Navbar/>
        </div>
    );
};