import React from "react"
import { useNavigate } from 'react-router-dom';
import "../styles/Index.css"
import Navbar from "../components/Navbar";
import {GeneralHeader} from "../components/Header";
import styled from "styled-components";
import {ButtonStyle} from "../components/Buttons/Button";
import coin_img from "../assets/images/coin.png";
import {SellerHeader} from "../components/UserComponents";
import product_pic from "../assets/images/i6.jpg"
import {CloseCircleOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {ScrollView} from "react-native";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 10px;
  height: 70vh;
`;


const HorizontalSlider = styled.div`
`;


const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: center;
  width: fit-content;
`;


const PayNowButton = styled(ButtonStyle)`
  background-color: var(--primary_green);
  font-size: 20px;
  display: flex;
  padding: 10px 16px;
  align-items: center;
  flex-direction: row;
  width: fit-content; 
  
  img {
    margin-left: 13px;
  }
  
`;

const ProductBox = styled.img`
  max-width:250px;
  max-height:115px;
  width: auto;
  height: auto;
  border-radius: 5px;
  box-shadow: 2px 4px 0 0 black;
  
  &:hover {
    scale: 105%;
    cursor: pointer;
    border: 1px solid var(--primary_green);
  }
`;


function ProductPic () {
    const ProductBoxContainer = styled.div`
      position: relative;
      display: flex;
      flex-direction: row;
      padding-left: 10px;
      
    `;

    const CloseIcon = styled(CloseCircleOutlined)`
      position: relative;
      font-size: 20px;
      scale: 130%;
      color: var(--text_color);
      background-color: var(--off_white);
      border-radius: 50%;
      border: 2px solid snow;
    `;

    const navigate = useNavigate();

    const handleClickOnProductImg = () => {
        navigate('/Search/:id');
    };

    return (
        <ProductBoxContainer>
            <ProductBox src={product_pic} alt={"product_pic"}
                        onClick={handleClickOnProductImg}/>
            <Button shape="circle" style={{  position: "absolute", right: "-15px"}}>
                <CloseIcon />
            </Button>
        </ProductBoxContainer>
    )
}


function SellerSlider(){
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            rowGap:"10px"}}>
            <SellerHeader/>
            <ProductsContainer>
                <ProductPic/><ProductPic/><ProductPic/>
            </ProductsContainer>
            <div style={{width:"90%", display:"flex", justifyContent:"flex-end"}}>
                <PayNowButton>
                    Pay now <img src={coin_img} alt={"coin_img"} width={"50px"}/>24
                </PayNowButton>
            </div>
        </div>
    );
}


export default function Cart() {
    return (
        <div>
            <GeneralHeader/>
            <ScrollView>
            <Container>
                <SellerSlider/>
                <SellerSlider/>
            </Container>
            </ScrollView>
            <Navbar/>
        </div>
    );
}