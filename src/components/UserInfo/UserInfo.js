import React from 'react'
import profile_pic from "../../assets/images/generic-profile-pic.jpg"
import { StarOutlined , StarTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import "./UserInfo.css"
import coin_img from "../../assets/images/coin.png"

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

function StarRating () {
    return (
        <StarTwoTone twoToneColor="gold" style={{ fontSize: '150%'}}/>
    )
}

export default function ProfileInfo() {
    return (
        <div className={"profile_container"}>
            <div className={"profile_name_rating"}>
                <ProfileImage src={profile_pic} alt={"profile_pic"}/>
                <div className={"seller_name_and_rating"}>
                    <h3>Sarah Johnson</h3>
                    <div className={"seller_rating"}>
                        <StarRating />
                        <StarRating />
                        <StarRating/>
                    </div>
                </div>
            </div>
            <div className={"coins"}>
                <img src={require("../../assets/images/coin.png")}
                alt={"coin_img"} width={"50px"}/>
                <div>43 Coins</div>
            </div>
        </div>
    );
};