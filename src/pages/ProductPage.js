import React, { useState } from 'react';
import styled from "styled-components"
import Navbar from "../components/Navbar";
import "../styles/ProductPage.css"
import Footer from "../components/Footer";
import { Descriptions, Button, Space } from 'antd';


const Container = styled.div``;

const Body = styled.div`
    display: flex;
`;

const ImgContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 0 10px;
  margin: 0 50px;
  display: flex;
  justify-content: center;
  background-color: #cddcc7;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: bold;
  //font-size: px;
`;


const ProductInfo = () => (
    <Descriptions title="Product Info">
        <Descriptions.Item label="Title" >Jeans for Mean</Descriptions.Item>
        <Descriptions.Item label="Brand">Zara</Descriptions.Item>
        <Descriptions.Item label="Size">empty</Descriptions.Item>
        <Descriptions.Item label="Price">12 tokens</Descriptions.Item>
        <Descriptions.Item label="Address">HIDDEN</Descriptions.Item>
    </Descriptions>
);


const ProductPage = () => {
    return (
        <Container>
            <Navbar/>
            <Space
                direction="vertical"
                size="middle"
                align="center">
                <ImgContainer>
                    <Image src={require('../assets/images/old army shows.jpg')} className="nav-logo"/>
                </ImgContainer>
                <InfoContainer>
                    <ProductInfo/>
                        {/*<Title>Old Army Boots</Title>*/}
                        {/*<Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>*/}
                        {/*<Price>50 tokens</Price>*/}
                </InfoContainer>
            </Space>
            <Footer/>
        </Container>
    );
};

export default ProductPage