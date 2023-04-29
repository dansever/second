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
import SellerInfo from "../../components/UserInfo/UserInfo";
import Price from "../../components/Price";


const ProductInfo = () => (
    <div className={"product-info"}>
        <p>Description:  loren ipsum </p>
        <p>Size:  11 </p>
        <p>Brand:  loren ipsum </p>
        <p>Distance:  1.1km </p>
    </div>
);


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