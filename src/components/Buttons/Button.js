import React, {useState} from "react";
import styled from "styled-components";
import "../../styles/Index.css"
import "./Button.css"
import {FilterFilled} from "@ant-design/icons"
import { Button, Radio } from 'antd';
import {HiMagnifyingGlass} from "react-icons/hi2";
import {HiFilter} from "react-icons/hi";
import {HiSortDescending} from "react-icons/hi";
import Colors from "../../color"

export const ButtonStyle = styled.button`
  color: var(--text_color);
  border-radius: 12px;
  height: 40px;
  width: 160px;
  font-family: "Montserrat", sans-serif;
  font-size: medium;
  font-weight: 600;
  box-shadow: 2px 3px 0 0 black;
  align-items: left;
  &:hover {
    cursor: pointer;
    //font-size: 105%;
    background-color: var(--secondary_green);
    }
  background-color: ${({ isFollowing }) => (isFollowing ? "#749A83" : "#F1F7F1" )};
`;


export function AddToShop() {
    return (
        <div className={"add_to_shop"}>
            <ButtonStyle>Add to your shop</ButtonStyle>
        </div>
    );
}

// export function AddToCart() {
//     return (
//         <div style={{color: Colors.dark_green,
//             display: "flex",
//             justifyContent: "center", padding: "0 0 0 0"}}>
//             <ButtonStyle>Add to cart</ButtonStyle>
//         </div>
//     );
// }


export function AcceptChallenge() {
    return (
        // <div className={"accept_challenge"}>
            <ButtonStyle>Accept Challenge</ButtonStyle>
        // </div>
    );
}
export function RefuseChallenge() {
    return (
        // <div className={"refuse_challenge"}>
            <ButtonStyle>Refuse Challenge</ButtonStyle>
        // </div>
    );
}

export function FilterButton() {
    return (
        <div className={"filter-btn"}>
            {/*<FilterFilled/>*/}
            {/*<FilterFilled/>*/}
            <ButtonStyle><HiFilter/>Filter</ButtonStyle>
        </div>
    );
}

export function SortButton() {
    return (
        <div className={"sort-btn"}>
            <ButtonStyle><HiSortDescending/>Sort</ButtonStyle>
        </div>
    );
}

export function FollowUnfollowBtn() {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <div>
            <ButtonStyle onClick={handleClick} isFollowing={isFollowing}>
                {isFollowing ? "Follow" : "Unfollow"}
            </ButtonStyle>
        </div>
    );
}
