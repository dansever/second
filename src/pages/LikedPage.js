import React, {useContext} from "react"
import "../styles/Index.css"
import MainFeed from "../components/MainFeed"
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import LikedFeed from "../components/LikedFeed"

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
                <LikedFeed/>
            </div>
            <Navbar/>
        </div>
    );
};