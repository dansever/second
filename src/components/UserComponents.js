import React from 'react'
import styled from "styled-components";
import profile_pic from "../assets/images/generic-profile-pic.jpg"
import token_img from "../assets/images/coin.png"
import { StarOutlined , StarTwoTone } from "@ant-design/icons";
import "../components/ProfileContainers/UserInfo.css"
import {FollowUnfollowBtn} from "./Buttons/Button";
import profile_pic_man from "../assets/images/profile_pic_man.jpg"

const ContainerStyle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  column-gap: 10px;
  //justify-content: center;
  //justify-items: center;
  //align-content: center;
`;

const ProfileImage = styled.img`
  height: 70%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 24px;
  justify-content: space-around;
  align-items: center;
`;


function StarRating () {
    return (
        <StarTwoTone twoToneColor="gold"
                     style={{ fontSize: '120%'}}/>
    )
}


export default function UserHeader() {
    return (
        <ContainerStyle>
            <ProfileImage src={profile_pic} alt={"profile_pic"}/>
            <TextContainer>
                Sara Boo
                <div style={{display:"flex", flexDirection:"row"}}>
                <StarRating/> <StarRating/> <StarRating/> <StarRating/>
                </div>
            </TextContainer>
        </ContainerStyle>
        );
        //
        // <div className={"profile_container"}>
        //     <div className={"profile_name_rating"}>
        //         <ProfileImage src={profile_pic} alt={"profile_pic"}/>
        //         <div className={"seller_name_and_rating"}>
        //             <h3>Sarah Johnson</h3>
        //             <div className={"seller_rating"}>
        //                 <StarRating />
        //                 <StarRating />
        //                 <StarRating/>
        //             </div>
        //         </div>
        //     </div>
        //     <div className={"coins"}>
        //         <img src={token_img}
        //              alt={"coin_img"} width={"50px"}/>
        //         <div>43 Coins</div>
        //     </div>
        // </div>
    // );
};


export function SellerInfo() {
    return (
        <div className={"seller-info-container"}>
            <div className={"profile_name_rating"}>
                <ProfileImage src={profile_pic_man} alt={"profile_pic"}/>
                <div className={"seller_name_and_rating"}>
                    <h3>Ben Williams</h3>
                    <div className={"seller_rating"}>
                        <StarRating />
                        <StarRating />
                        <StarRating />
                    </div>
                </div>
            </div>
            <FollowUnfollowBtn/>
        </div>
    );
};