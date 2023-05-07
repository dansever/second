import React from 'react';
import "../styles/Index.css"
import styled from "styled-components"
import { Descriptions } from 'antd';
import i1_img from "../assets/images/i1.jpg";
import Navbar from "../components/Navbar";
import {GeneralHeader} from "../components/Header";
import { ButtonStyle} from "../components/Buttons/Button";
import { Divider } from 'antd';
import Price from "../components/Price";
import UserHeader from "../components/UserComponents";
import {ScrollView} from "react-native";


const ProductContainer = styled.div`
  background-color: var(--light_green);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 5px;
  padding: 65px 5px 65px 0;
  height: 40vh;
`;

const ProductImgContainer = styled.div`
  //background-color: var(--primary_green);
  width:70%;
  //height:40vh;
  overflow:hidden;
  display: flex;
  justify-content: space-around;
`;

const SellerContainer = styled.div`
  background-color: var(--light_green);
  width:60%;
  //height:10vh;
  overflow:hidden;
  padding-left: 5px;
  &:hover {
    background-color: var(--secondary_green); 
    cursor: pointer;
    border-radius: 20px;
  }
`;

const ProductDescriptionContainer = styled.div`
  background-color: var(--light_green);
  width:70%;
  //height:21vh;
  overflow:hidden;
  align-items: center; 
`;

const Add = styled.div`
  background-color: var(--light_green);
  width:70%;
  //height: 8vh;
  overflow:hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

function ProductDescription () {
    return (
        <Descriptions
            size={"small"}
            bordered
            column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}
            labelStyle={{fontWeight:"bold"}}
        >
            <Descriptions.Item label="Description">Beige Jacket</Descriptions.Item>
            <Descriptions.Item label="Size">medium</Descriptions.Item>
            <Descriptions.Item label="Brand">Zara</Descriptions.Item>
            <Descriptions.Item label="Condition">as new</Descriptions.Item>
            <Descriptions.Item label="Distance">1.2 km</Descriptions.Item>
        </Descriptions>
    );
}

const AddToCartButton = styled(ButtonStyle)`
  background-color: var(--primary_green);
  font-size: 20px;
`;


export default function Product () {
    return (
        <div>
            <GeneralHeader/>
            <ScrollView>
                <ProductContainer>
                    <ProductImgContainer>
                            <img className={"product_image"}
                                 alt={"product_img"}
                                 src={i1_img} style={{height:"100%"}}/>
                    </ProductImgContainer>
                    <SellerContainer>
                        <UserHeader/>
                    </SellerContainer>
                    <ProductDescriptionContainer>
                        <ProductDescription/>
                    </ProductDescriptionContainer>
                    <Add>
                        <Price/>
                        <AddToCartButton>Add To Cart</AddToCartButton>
                    </Add>
                </ProductContainer>
            </ScrollView>

            <Navbar/>
        </div>
    );
};