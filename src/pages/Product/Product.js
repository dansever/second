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


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  padding: 1vh 5vh;
  height: max-content;
  background-color: var(--secondary_green);
`;

const ProductImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 60%;
  border-radius: 0;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;


function SellerInfo() {
    return (
        <div className={"seller_info"}>
            <ProfileImage src={profile_pic} alt={"profile_pic"}/>
            <div className={"seller_name_and_rating"}>
                <h3>Sarah Johnson</h3>
                <div className={"seller_rating"}>
                    <StarOutlined className={"StarOutlined_icon"}/>
                    <StarOutlined className={"StarOutlined_icon"}/>
                    <StarOutlined className={"StarOutlined_icon"}/>
                </div>
            </div>
        </div>
    );
};
const ProductInfo = () => (
    <div>
        <Descriptions size="small"
                      bordered={false}
                      labelStyle={{fontWeight: "Bold"}}>
            <Descriptions.Item label="Title" >Old army boots</Descriptions.Item>
            <Descriptions.Item label="Brand">Zara</Descriptions.Item>
            <Descriptions.Item label="Size">42</Descriptions.Item>
            <Descriptions.Item label="Price">12 tokens</Descriptions.Item>
            <Descriptions.Item label="Address">""</Descriptions.Item>
        </Descriptions>
    </div>
);

const AddToCartContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const TokenImg = styled.img`
  width: 50px;
  height: 50px;
`;

// function AddToCart() {
//     return (
//         <AddToCartContainer>
//             <TokenImg src={second_token} alt={"token"}/>
//             <h4 style={{flex:2}}>5</h4>
//             {/*<AddToCartButton/>*/}
//             <Button>Add To Cart </Button>
//         </AddToCartContainer>
//     );
// }

export default function Product () {
    return (
        // <div style={{display:"flex", flexDirection:"column"}}>
        <div>
            <Header_Product/>
            <div className={"product-container"}>
                <img className={"product_image"} alt={"prodoct_image"} src={product_pic}/>
                <SellerInfo/>
                <Divider style={{ borderWidth: 1, borderColor: 'black' }}/>
                <div className={"prodct_info"}>

                </div>
                <Divider style={{ borderWidth: 1, borderColor: 'black' }}/>
                <AddToCart/>

                {/*    <ProductImage src={product_pic}/>*/}
            {/*    <SellerInfo/>*/}

            {/*    <ProductInfo/>*/}
            {/*    <Divider style={{ borderWidth: 1,*/}
            {/*        borderColor: 'black' }}/>*/}
            {/*    <AddToCart/>*/}
            </div>
        </div>
    );
};