import React from "react";
import styled from "styled-components";
import "../../styles/Index.css"
import "./Button.css"
import {FilterFilled} from "@ant-design/icons"
import { Button, Radio } from 'antd';
import {HiMagnifyingGlass} from "react-icons/hi2";
import {HiFilter} from "react-icons/hi";
import {HiSortDescending} from "react-icons/hi";

export const MyButton = styled.button`
  color: var(--text_color);
  border-radius: 10px;
  height: 40px;
  width: 190px;
  font-size: medium;
  font-weight: bold;
  box-shadow: 5px 5px 0 0 black;
  &:hover {
    cursor: pointer;
    font-size: 105%;
    width: 190px;
  }
`;

export default function AddToShop() {
    return (
        <div className={"add_to_shop"}>
            <MyButton>Add to your shop</MyButton>
        </div>
    );
}

export  function AddToCart() {
    return (
        <div className={"add_to_cart"}>
            <MyButton>Add to cart</MyButton>
        </div>
    );
}


export function AcceptChallenge() {
    return (
        // <div className={"accept_challenge"}>
            <MyButton>Accept Challenge</MyButton>
        // </div>
    );
}
export function RefuseChallenge() {
    return (
        // <div className={"refuse_challenge"}>
            <MyButton>Refuse Challenge</MyButton>
        // </div>
    );
}

export function FilterButton() {
    return (
        <div className={"filter-btn"}>
            {/*<FilterFilled/>*/}
            {/*<FilterFilled/>*/}
            <MyButton><HiFilter/>Filter</MyButton>
        </div>
    );
}

export function SortButton() {
    return (
        <div className={"sort-btn"}>
            <MyButton><HiSortDescending/>Sort</MyButton>
        </div>
    );
}

export function ProfileOptions () {
    return (
        <Radio.Group style={{scale:"120%"}}>
            <Radio.Button value="MyShop">My Shop</Radio.Button>
            <Radio.Button value="Saved">Saved Items</Radio.Button>
            <Radio.Button value="Seller">Sellers</Radio.Button>
        </Radio.Group>
    );
}

export function FollowUnfollowBtn() {
    return (
        <div>
            <div className={"follow_seller"}>Unfollow</div>
        </div>
    );
}
