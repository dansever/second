import React, {useContext, useEffect, useState} from "react"
import "../styles/Index.css"
import "../styles/Home.css"
import Feed_Main from "../components/Feed_Main"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import { AuthContext } from '../components/AuthProvider';
import Colors from "../color.js";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import {Modal} from 'antd';
// import AboutModal from "../components/About";

export default function Home() {
    const currentUser = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [firstTime, setFirstTime] = useState(false);

    useEffect(() => {
        const UserRef = doc(db,'users',currentUser.uid);
        getUserData(UserRef);
    }, []);

    async function getUserData(UserRef) {
        try {
            const docSnap = await getDoc(UserRef);
            if (docSnap.exists()) {
                setFirstTime(docSnap.data().first_time);
            } else {
                console.log("User document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting user document:", error);
            return null;
        }
    }

    const getUserName = async () => {
        const userId = currentUser.uid;
        const UserRef = doc(db, 'users', userId);
        const docSnap = await getDoc(UserRef);
        return docSnap.data().first_name;
    };

    getUserName().then( result => { setUserName(result)});

    const changeFirstTime  = async () => {
        setFirstTime(false);
        // e.preventDefault();
        try {
            const userId = currentUser.uid;
            const UserRef = doc(db,'users',userId);
            const newData = {
                first_time: false,
            };
            updateDoc(UserRef, newData)
                .then( () => {

                    console.log('User updated successfully');
                })
        } catch (error) {
            console.log('Something went wrong. Please try again.');
        }
    };


    return (
        <div>
            {currentUser ?
                (<MainHeader color={Colors.background_white} name={userName}/> )
                :
                ( <MainHeader  color={Colors.background_white}  name={null}/> )}
            <Modal
                open={firstTime}
                onCancel={() => changeFirstTime()}
                footer={[]}
            >
                <h2 style={{color:Colors.green, fontWeight:"600"}}>How To Use Second</h2>
                <div className={"how-to-modal"}>
                    <h3 style={{color:Colors.green}}>Looking to give away a clothing item?</h3>
                    <p>1. Take a photo of the item</p>
                    <p>2. Upload item information</p>
                    <p>3. Receive message from a community member</p>
                    <p>4. Arrange meeting at specific time & place</p>
                    <p>5. Give item and select "Item Given" in Profile page</p>
                    <br/>
                    <h3 style={{color:Colors.green}}>In search for new clothes?</h3>
                    <p>1. Search feed for liked items </p>
                    <p>2. Like to save for later or contact seller immediately</p>
                    <p>3. Contact seller and arrange meeting </p>
                </div>
            </Modal>}
            <div className={"home-container"}>
                <Feed_Main/>
            </div>
            <Navbar/>
        </div>
    );
};