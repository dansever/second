import React, {useContext, useEffect, useState} from "react";
import MainHeader from "../components/Header";
import "../styles/Profile.css"
import "../styles/Index.css"
import Navbar from "../components/Navbar";
import { AuthContext } from '../components/AuthProvider';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";

export default function MyProfile() {
    const currentUser = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [userNeighborhood, setUserNeighborhood] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");



    async function getUserData(UserRef) {
        try {
            const docSnap = await getDoc(UserRef);
            if (docSnap.exists()) {
                const first_name = docSnap.data().first_name;
                const neighborhood = docSnap.data().neighborhood;
                const phone_number = docSnap.data().phone_number;
                setUserName(first_name);
                setUserNeighborhood(neighborhood);
                setUserPhoneNumber(phone_number);
            } else {
                console.log("User document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting user document:", error);
            return null;
        }
    }

    useEffect(() => {
        const userId = currentUser.uid;
        const UserRef = doc(db,'users',userId);
        getUserData(UserRef);
    }, []);



    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )
            }
            <header className={"page_header"}>My Profile</header>
            <div className={"info-container"}>
                <div id={"personal-info"}>
                    <h3>Name: {userName}</h3>
                    <h3>Neighborhood: {userNeighborhood}</h3>
                    <h3>Phone number: {userPhoneNumber}</h3>


                </div>
                <div id={"product-info"}>
                    <h4>liked items: 4</h4>

                </div>
            </div>
            <Navbar/>
        </div>
    );
}