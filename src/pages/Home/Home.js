import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Index.css"
import "./Home.css"
import Header_Home from "../../components/Header/Header";
import styled from "styled-components";
import {AcceptChallenge, MyButton, RefuseChallenge} from "../../components/Buttons/Button"
import second_hand_clothes from "../../assets/images/second_hand_clothes.jpg"
import green_item from "../../assets/images/green item.jpg"
import Footer from "../../components/Footer/Footer"
import profile_pic from "../../assets/images/generic-profile-pic.jpg";
import Colors from "../../color"

const HomeContainer = styled.div`
  //border: 1px solid black;
  background-color: var(--background_green);
  position: fixed;
  padding: 10px 10px;
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubContainer1 = styled.div`
  border: 1px solid black;
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 5px;
  box-shadow: 0 8px 0 0 black;
`;

const ImgGrid = styled.div`
  //border: 2px solid black;
  width: 80%;
  height: 45%;
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

const ProfileImage = styled.img`
  width: 50%;
  border-radius: 50%;
`;

const SubContainer2 = styled.div`
  //border: 1px solid black;
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 5px;
`;


export default function Home() {
    return (
        <div>
            <Header_Home/>
            <HomeContainer>
                <SubContainer1>
                    <h2>Weekly Challenge</h2>
                    <h3>upload a green item and get 2 coins free!</h3>
                    <ImgGrid>
                        <img src={green_item} className="placeholder_image"  alt={"green_item"}/>
                    </ImgGrid>
                    <MyButton>Accept Challenge</MyButton>
                    <MyButton>See what others uploaded</MyButton>
                </SubContainer1>
                <SubContainer2>
                <h2> Items from sellers you liked </h2>
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
                </SubContainer2>
            </HomeContainer>
        <Footer/>
    </div>
    )
};