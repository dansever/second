import React from "react";
import {Header_Profile} from "../../components/Header/Header";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import "./Profile.css"
import ProfileInfo from "../../components/UserInfo/UserInfo"
import {ProfileOptions} from "../../components/Buttons/Button";

const PageTitle = styled.div`
  position: absolute;
  top: 6px;
  left: 30%;
  font-family: 'Lora', serif;
  font-size: 36px;
`;

export default function MyProfile() {
    return (
        <div>
            <Header_Profile/>
            <PageTitle>My Profile</PageTitle>
            <nav className={"page_container"}>
                <ProfileInfo/>
                <ProfileOptions/>
            </nav>
            <Footer/>
        </div>
        // <div style={{display:"flex",
        //     flexDirection:"column",
        //     justifyContent:"center",
        //     alignItems:"center",
        //     alignContent:"center"}}>
        //     <PageTitle>My Profile</PageTitle>
        //     <div className = "profile_container">
        //     </div>
    );
}