import React, {useContext} from "react";
import "../styles/Upload.css"
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import {AuthContext} from "../components/AuthProvider";
import FormComponent from "../components/UploadForm";

export default function Upload() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )
            }
            <header className={"page_header"}>Upload an Item</header>
            <div className={"upload-container"}>
                <FormComponent/>
            </div>
            <Navbar/>
        </div>
    );
};