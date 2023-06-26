import React, {useContext} from "react";
import "../styles/Upload.css"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import {AuthContext} from "../components/AuthProvider";
import FormComponent from "../components/UploadForm";
import Colors from "../color.js";

export default function Upload() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader color={Colors.light_blue} email={currentUser.email}/> )
                :
                ( <MainHeader color={Colors.light_blue} email={null}/> )
            }
            <header className={"page_header"}>Upload an Item</header>
            <div className={"upload-container"}>
                <FormComponent/>
            </div>
            <Navbar/>
        </div>
    );
};