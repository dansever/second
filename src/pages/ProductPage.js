import React from 'react';
import "../styles/ProductPage.css"
import "../styles/Main.css"
import styled from "styled-components"
import { StarOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Descriptions } from 'antd';
import profile_pic from "../assets/images/generic-profile-pic.jpg";
import product_pic from "../assets/images/old army shows.jpg";
import Footer from "../components/Footer/Footer";
import AddToCart from "../components/AddToCart/AddToCart";


const ProductPageHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--primary_green);
  display: flex;
  align-items: center;
  color: white;
  padding: 10px;
`;

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
  width: 100%;
  height: 80%;
  border-radius: 0;
`;

const SellerContainer = styled.div`
  display: flex;
  gap: 15px;
  font-size: medium;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

// function SellerRating() {
//     return (
//         <center style={{ marginTop: 100 }}>
//             <StarFilled />
//         </center>
//     );
// };

function SellerInfo() {
    return (
        <SellerContainer>
            <ProfileImage src={profile_pic} alt={"profile_pic"}/>
            <div className={"seller_name_and_rating"}>
                <h3>Sarah Johnson</h3>
                <div className={"seller_rating"}>
                <StarOutlined className={"StarOutlined_icon"}/>
                <StarOutlined className={"StarOutlined_icon"}/>
                <StarOutlined className={"StarOutlined_icon"}/>
                </div>

            </div>
        </SellerContainer>
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
        <AddToCart/>
    </div>
);


const ProductPage = () => {
    return (
        <div>
            <ProductPageHeader>
                <ArrowLeftOutlined className={"ArrowLeftOutlined"}/>
            </ProductPageHeader>
            <Container>
                <ProductImage src={product_pic}/>
                <SellerInfo/>
                <ProductInfo/>
            </Container>
            <Footer/>
        </div>
    );
};

export default ProductPage