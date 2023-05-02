import React from "react";
import styled from "styled-components";
import "../../styles/Index.css"
import "./Button.css"
import {FilterFilled} from "@ant-design/icons"
import { Button, Radio } from 'antd';
import {HiMagnifyingGlass} from "react-icons/hi2";
import {HiFilter} from "react-icons/hi";
import {HiSortDescending} from "react-icons/hi";

export const ButtonStyle = styled.button`
    color: var(--text_color);
    border-radius: 10px;
    height: 40px;
    width: 160px;
    font-size: medium;
    font-weight: bold;
    box-shadow: 2px 3px 0 0 black;
    &:hover {
        cursor: pointer;
        font-size: 110%;
    }
`;


export default function AddToShop() {
    return (
        <div className={"add_to_shop"}>
            <ButtonStyle>Add to your shop</ButtonStyle>
        </div>
    );
}

export  function AddToCart() {
    return (
        <div className={"add_to_cart"}>
            <ButtonStyle>Add to cart</ButtonStyle>
        </div>
    );
}


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
    return (
        <div>
            <div className={"follow_seller"}>Unfollow</div>
        </div>
    );
}
