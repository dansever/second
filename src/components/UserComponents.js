import React from 'react'
import styled from "styled-components";
import profile_pic from "../assets/images/generic-profile-pic.jpg"
import {FollowUnfollowBtn} from "./Buttons/Button";
import profile_pic_man from "../assets/images/profile_pic_man.jpg"
import coin_img from "../assets/images/coin.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`;

const PicAndName = styled.div`
  display: flex;
  gap: 15px;
  font-size: medium;
  justify-content: flex-start;
  flex-direction: row;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: 0 2px 0 0 black;
`;

const Coins = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
`;


export default function UserHeader() {
    return (
        <Container>
            <PicAndName>
                <ProfileImage src={profile_pic} alt={"profile_pic"}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>Sarah Johnson</h3>
                </div>
            </PicAndName>
            <Coins>
                <img src={coin_img} alt={"coin_img"} width={"50px"}/>
                <div>43 Coins</div>
            </Coins>
        </Container>
    );
};

export function SellerHeader() {
    return (
        <Container>
            <PicAndName>
                <ProfileImage src={profile_pic} alt={"profile_pic"}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>Anna Kendrick</h3>
                </div>
            </PicAndName>
        </Container>
    );
}


const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;


export function SellerInfo() {
    return (
        <StyledContainer className={"seller-info-container"}>
            <StyledDiv className={"profile_name_rating"}>
                <ProfileImage src={profile_pic_man} alt={"profile_pic"}/>
                <div className={"seller_name_and_rating"}>
                    <h3>Ben Williams</h3>
                </div>
            </StyledDiv>
            <FollowUnfollowBtn/>
        </StyledContainer>

    );
}