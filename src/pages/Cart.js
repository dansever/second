import React from "react"
import "../styles/Index.css"
import Navbar from "../components/Navbar";
import {GeneralHeader} from "../components/Header";
import styled from "styled-components";
import {ButtonStyle} from "../components/Buttons/Button";
import coin_img from "../assets/images/coin.png";
import {SellerHeader} from "../components/UserComponents";
import product_pic from "../assets/images/i6.jpg"
import {CloseCircleOutlined} from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 10px;
`;


const HorizontalSlider = styled.div`
`;


const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
`;


const PayNowButton = styled(ButtonStyle)`
  background-color: var(--primary_green);
  width: 40%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductBox = styled.img`
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
  border-radius: 5px;
  box-shadow: 2px 4px 0 0 black;
`;


function ProductPic () {
    return (
        <div>
            <ProductBox src={product_pic} alt={"product_pic"} />
            <CloseCircleOutlined style={{width: '30px'}}/>
        </div>
    )
}


function SellerSlider(){
    return (
        <div style={{display:"flex", flexDirection:"column",
            gap:"5px"}}>
            <SellerHeader/>
            <ProductsContainer>
                <ProductPic/> <ProductPic/> <ProductPic/>
            </ProductsContainer>
            <PayNowButton>
                Pay now
                <img src={coin_img} alt={"coin_img"} width={"50px"}/>
                24
            </PayNowButton>
        </div>
    );
}

export default function Cart() {
    return (
        <div>
            <GeneralHeader/>
            <Container>
                <SellerSlider/>
                <SellerSlider/>
                <SellerSlider/>
            </Container>
            <Navbar/>
        </div>
    );
}