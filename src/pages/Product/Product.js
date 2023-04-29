import React from 'react';
import "../../styles/Index.css"
import "./Product.css"
import styled from "styled-components"
import { StarOutlined } from '@ant-design/icons';
import { Descriptions } from 'antd';
import profile_pic from "../../assets/images/generic-profile-pic.jpg";
import product_pic from "../../assets/images/second_hand_clothes.jpg";
import Footer from "../../components/Footer/Footer";
import {Header_Product} from "../../components/Header/Header";
import {AddToCart} from "../../components/Buttons/Button";
import { Divider } from 'antd';
import second_token from "../../assets/images/second-token.png";
import SellerInfo from "../../components/UserInfo/UserInfo";
import Price from "../../components/Price";


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1vh;
//   padding: 1vh 5vh;
//   height: max-content;
//   background-color: var(--secondary_green);
// `;

const ProductInfo = () => (
    <div style={{width: "90%", paddingRight:"10px", lineHeight: '25px'}}>
        <p>Description:  loren ipsum </p>
        <p>Size:  11 </p>
        <p>Brand:  loren ipsum </p>
        <p>Distance:  1.1km </p>
    </div>
);

// const AddToCartContainer = styled.div`
//   width: auto;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-evenly;
// `;


function PriceAndAdd() {
    return (
        <div className={"Price-and-add"}>
            <Price/>
            <AddToCart/>
        </div>
);
}

export default function Product () {
    return (
        <div>
            <Header_Product/>
            <div className={"product-page-container"}>
                <img className={"product_image"}
                     alt={"product_image"}
                     src={product_pic} style={{marginBottom:"10px"}}/>
                <SellerInfo/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>
                <ProductInfo/>
                <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }}/>
                <PriceAndAdd/>
            </div>
            <Footer/>
        </div>
    );
};