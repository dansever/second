import React, {useState} from "react";
import styled from "styled-components";
import "../../styles/Index.css"
import "./Button.css"
import {HiFilter} from "react-icons/hi";
import {HiSortDescending} from "react-icons/hi";

export const ButtonStyle = styled.button`
  color: var(--text_color);
  border-radius: 12px;
  height: 40px;
  width: 170px;
  font-family: "Montserrat", sans-serif;
  font-size: medium;
  font-weight: 600;
  box-shadow: 2px 3px 0 0 black;
  &:hover {
    cursor: pointer;
    background-color: var(--secondary_green);
    scale: 101%;
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

export function FilterButton() {
    return (
        <div className={"filter-btn"}>
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

export function FollowUnfollowBtn({isFollowed = false}) {
    const [isFollowing, setIsFollowing] = useState(isFollowed);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <div>
            <ButtonStyle onClick={handleClick} isFollowing={isFollowing}>
                {isFollowing ? "Following" : "Not Following"}
            </ButtonStyle>
        </div>
    );
}