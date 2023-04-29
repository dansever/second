import React from "react"
import second_token from "../assets/images/second-token.png";
import styled from "styled-components";


const TokenImg = styled.img`
  width: 50px;
  height: 50px;
`;


const PriceAndAdd = styled.div`
    border:1px solid transparent;
    width:20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

export default function Price () {
    return (
        <div>
            <PriceAndAdd>
                <TokenImg src={second_token} alt={"token"}/>
                <h4>5</h4>
            </PriceAndAdd>
        </div>
    )
}