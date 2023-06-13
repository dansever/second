import React, {useContext} from "react"
import "../styles/Index.css"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import Feed_Liked from "../components/Feed_Liked"

export default function LikedPage() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )}
            <div className={"liked-page-container"}>
                <header className={"page_header"}>Liked Items</header>
                <Feed_Liked/>
            </div>
            <Navbar/>
        </div>
    );
};