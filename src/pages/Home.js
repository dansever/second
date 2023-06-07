import React, {useContext} from "react"
import "../styles/Index.css"
import "../styles/Home.css"
import MainFeed from "../components/MainFeed"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';

export default function Home() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )}
            <div className={"home-container"}>
                {/*<SearchBar defaultNeighborhood={userNeighborhood}  />*/}
                <MainFeed/>
            </div>
            <Navbar/>
        </div>
    );
};