import React from "react";
import styled from "styled-components";
import second_token from "../../assets/images/second-token.png"
import "../../styles/Main.css"
import "./AddToCart.css"


const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const PriceContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

const TokenImg = styled.img`
  width: 50px;
  height: 50px;
`;


export default function AddToCart() {

    return (
        <Container>
            <PriceContainer>
                <TokenImg src={second_token} alt={"token"}/>
                <h4>5</h4>
            </PriceContainer>
            <button className="add-to-cart-button">Add To Cart </button>
        </Container>
    );
}


