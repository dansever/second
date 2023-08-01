import React, {useContext, useState} from "react"
import "../styles/Index.css"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import "../styles/LikedPage.css"
import { AuthContext } from '../components/AuthProvider';
import Feed_Liked from "../components/Feed_Liked"
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";


export default function LikedPage() {
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
                ( <MainHeader name={userName}/> )
                :
                ( <MainHeader name={null}/> )}
            <div className={"liked-page-container"}>
                <header className={"page_header"}>Liked Items</header>

                <Feed_Liked/>
            </div>
            <Navbar/>
        </div>
    );
};