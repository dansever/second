import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Index.css"
import "./Home.css"
import Header_Home from "../../components/Header/Header";
import styled from "styled-components";
import {AcceptChallenge , RefuseChallenge} from "../../components/Buttons/Button"
import second_hand_clothes from "../../assets/images/second_hand_clothes.jpg"
import green_item from "../../assets/images/green item.jpg"
import Footer from "../../components/Footer/Footer"
import profile_pic from "../../assets/images/generic-profile-pic.jpg";

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;


export default function Home() {
    return (
        <div>
            <Header_Home/>
            <div className="home-container">
                <div className="weekly-challenge">
                    <h2>Weekly Challenge</h2>
                    <p>upload green item and get 2 coins free!</p>
                    {/*<div className={"home_photo_grid"}>*/}
                        <img src={green_item} className="placeholder_image" />
                    {/*</div>*/}
                    <div className="buttons-container">
                        <AcceptChallenge/>
                        {/*<RefuseChallenge/>*/}
                    </div>
                </div>
                {/*<h2> Items from sellers you liked </h2>*/}
                <div className={"home_second_container"}>
                    <div className={"liked-sellers-container"}>
                        <h2>Visit sellers you liked</h2>
                        <div className={"profile_container"}>
                            <div className={"profile_name_rating"}>
                                <ProfileImage src={profile_pic} alt={"profile_pic"}/>
                                <h6>Sarah Johnson</h6>
                            </div>
                            <div className={"profile_name_rating"}>
                                <ProfileImage src={profile_pic} alt={"profile_pic"}/>
                                <h6>Gal Mitrani</h6>
                            </div>
                            <div className={"profile_name_rating"}>
                                <ProfileImage src={profile_pic} alt={"profile_pic"}/>
                                <h6>Inbal Kheifetz</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <Footer/>
    </div>
    )
};