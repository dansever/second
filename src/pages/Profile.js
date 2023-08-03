import React, {useContext, useEffect, useState} from "react";
import MainHeader from "../components/Header";
import Navbar from "../components/Navbar";
import { doc, getDoc} from "firebase/firestore";
import Feed_MyProfile from "../components/Feed_MyProfile";
import "../styles/Profile.css"
import "../styles/Index.css"
import {message} from 'antd';
import {AuthContext } from '../components/AuthProvider';
import {db} from "../firebase";
import { BsBagHeart, BsCloudSun, BsPersonPlus } from "react-icons/bs";
import Colors from "../color.js";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

export default function MyProfile() {
    const currentUser = useContext(AuthContext);
    const [userFirstName, setUserFirstName] = useState("");
    const [userNeighborhood, setUserNeighborhood] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [codeBoxText, setCodeBoxText] = useState("");
    const [userCode, setUserCode] = useState("");
    const [userFriends, setUserFriends] = useState(0);
    const [itemsDonated, setItemsDonated] = useState("");
    const [co2Saved, setCo2Saved] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const UserRef = doc(db,'users',currentUser.uid);
        getUserData(UserRef);
    }, []);

    async function getUserData(UserRef) {
        try {
            const docSnap = await getDoc(UserRef);
            if (docSnap.exists()) {
                setUserFirstName(docSnap.data().first_name);
                setUserPhoneNumber(docSnap.data().phone_number);
                setUserNeighborhood(docSnap.data().neighborhood);
                setUserCode(docSnap.data().user_code)
                setCodeBoxText(docSnap.data().user_code)
                setUserFriends(docSnap.data().friends_add);
                setItemsDonated(docSnap.data().items_given);
                setCo2Saved((docSnap.data().items_given) * 7.5);

            } else {
                console.log("User document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting user document:", error);
            return null;
        }
    }

    const copyToClipboard = () => {
        let isCopy = copy(userCode);
        if (isCopy) {
            toast.success("Copied to Clipboard");
            setIsCopied(true);
            setCodeBoxText("Copied")
            setTimeout(() => {
                setCodeBoxText(userCode)
                setIsCopied(false);
            }, 1500);
            message.info(
                "Copied to Clipboard", 1,
                () => {console.log('Pop-up closed');});
        }
    };

    return (
        <div>
            {currentUser ?
                ( <MainHeader name={userFirstName}/> )
                :
                ( <MainHeader name={null}/> )
            }

            <header className={"page_header"}>My Profile</header>
            <div>
                <div className={"user-info"}>
                    <div className={"description"}>
                    <div className={"icons"}>
                        <BsBagHeart/>
                        <h4 >{itemsDonated}</h4>
                    </div>
                        <h5>Items Given</h5>
                    </div>

                    <div className={"description"}>
                        <div className={"icons"}>
                            <BsCloudSun/>
                            <h4 className={"h4-des"}>{co2Saved} kg</h4>
                        </div>
                        <h5>CO<sub>2</sub> Saved</h5>
                    </div>
                    <div className={"description"}>
                        <div className={"icons"}>
                            <BsPersonPlus/>
                            <h4 className={"h4-des"}>{userFriends}</h4>
                        </div>
                        <h5>Friends Added</h5>
                    </div>
                </div>
                <div className={"invite-friends"}>
                    <h5 className={"h4-des-1"}>Copy code to invite friends:</h5>
                    <button
                            className={`code-button ${isCopied ? 'copied' : ''}`}
                            onClick={copyToClipboard}
                            style={{color:Colors.green}}>
                        {codeBoxText}
                    </button>
                </div>

            </div>

            <div className={"feed-container"}>
                <h2 >Uploaded Items</h2>
                <Feed_MyProfile
                    setItemsDonated = {setItemsDonated}
                    itemsDonated = {itemsDonated}
                    setCo2Saved = {setCo2Saved}
                    co2Saved = {co2Saved}/>
            </div>

            <Navbar/>

        </div>
    );
}

