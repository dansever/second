import React, {useContext, useState} from "react";
import "../styles/Upload.css"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import {AuthContext} from "../components/AuthProvider";
import FormComponent from "../components/UploadForm";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import Colors from "../color.js";

export default function Upload() {
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
                ( <MainHeader color={Colors.light_blue} name={userName}/> )
                :
                ( <MainHeader color={Colors.light_blue} name={null}/> )
            }
            <header className={"page_header"}>Upload an Item</header>
            <div className={"upload-container"}>
                <FormComponent/>
            </div>
            <Navbar/>
        </div>
    );
};