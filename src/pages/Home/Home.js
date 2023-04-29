import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Index.css"
import "./Home.css"
import Header_Home from "../../components/Header/Header";
import styled from "styled-components";
import {AcceptChallenge , RefuseChallenge} from "../../components/Buttons/Button"
import second_hand_clothes from "../../assets/images/second_hand_clothes.jpg"
import Footer from "../../components/Footer/Footer"



export default function Home() {
    return (
        <div className="home">
            <Header_Home/>
            <div className="weekly-challenge">
                <h2>Weekly Challenge</h2>
                <h4>loren ipsum loren ipsum</h4>
                <div className={"home_photo_grid"}>
                    <img alt={"img1"} src={require("../../assets/images/i1.jpg")}/>
                    <img alt={"img2"} src={require("../../assets/images/i2.jpg")}/>
                    <img alt={"img3"} src={require("../../assets/images/i3.jpg")}/>
                    <img alt={"img4"} src={require("../../assets/images/i4.jpg")}/>
                    <img alt={"img5"} src={require("../../assets/images/i5.jpg")}/>
                    <img alt={"img6"} src={require("../../assets/images/i6.jpg")}/>

                </div>
                <div className="buttons-container">
                    <AcceptChallenge/>
                    <RefuseChallenge/>
                </div>
            </div>
            <h2> Items from sellers you liked </h2>
            <div className={"home_second_container"}>
                {/*<div className={"liked-sellers-container"}>*/}
                {/*</div>*/}
            </div>
        <Footer/>
    </div>
    )
};