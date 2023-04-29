import React from "react";
import styled from "styled-components";
import "../../styles/Index.css"
import "./Button.css"
import {FilterFilled} from "@ant-design/icons"
import {HiMagnifyingGlass} from "react-icons/hi2";
import {HiFilter} from "react-icons/hi";
import {HiSortDescending} from "react-icons/hi";


export const Button = styled.button`
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
            <Button>Add to your shop</Button>
        </div>
    );
}

export  function AddToCart() {
    return (
        <div className={"add_to_cart"}>
            <Button>Add to cart</Button>
        </div>
    );
}


export function AcceptChallenge() {
    return (
        <div className={"accept_challenge"}>
            <Button>Accept Challenge</Button>
        </div>
    );
}
export function RefuseChallenge() {
    return (
        <div className={"refuse_challenge"}>
            <Button>Refuse Challenge</Button>
        </div>
    );
}

export function FilterButton() {
    return (
        <div className={"filter-btn"}>
            {/*<FilterFilled/>*/}
            <Button><HiFilter/>Filter</Button>
        </div>
    );
}

export function SortButton() {
    return (
        <div className={"sort-btn"}>
            <Button><HiSortDescending/>Sort</Button>
        </div>
    );
}

