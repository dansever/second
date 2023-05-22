import React, {useState} from 'react';
import styled from "styled-components";
import {HeartFilled, HeartOutlined, EditOutlined} from "@ant-design/icons";
import {Button} from "antd";
import Card from '@mui/material/Card';
import coin_img from "../assets/images/coin.png";
import {useNavigate} from "react-router-dom";
import "../styles/Card.css"

const InfoContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
  padding-right: 7px;
  padding-left: 4px;
`;

export default function MainCard(product) {
    const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
    const navigate = useNavigate();

    const cardStyle = {
        borderRadius: '20px',
        boxShadow: '0 4px 6px black'
};
    const handleLike = () => {
        setLikeToggledOn((prevState) => !prevState);
    };

    return (
        <Card style={cardStyle}>
            <div className={"img-box"}>
                <img
                    src={product.image_ref}
                    alt={product.alt}
                />
            </div>
            <div className={"content-box"}>
                <div className={"left-side"}>
                    <h3>    {product.title}         </h3>
                    <p>     Price: ${product.price} </p>
                    <p>     Size: {product.size}    </p>
                    <p>     Brand: {product.brand}  </p>
                </div>
                <div className={"right-side"}>
                    <Button shape="circle"
                            className={"card_like_button"}
                            onClick={handleLike}>
                        {isLikeToggledOn ?
                            <HeartFilled style={{ scale: "105%", color: "red" }}/>
                            : <HeartOutlined style={{ color: "black" }}/>}
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export function MyShopCard (props) {
    return (
        <Card
              hoverable
              style={{
                  borderRadius: '30px',
                  border: '1px solid black',
                  boxShadow: '3px 4px 0 0 black',
              }}
              cover={<img className={'imgItem'} alt="cloth img" src={props.img} />}>
            <InfoContainer style={{display:"flex",justifyContent:"space-around"}}>
                <div style={{display:"flex", flexDirection:"row",
                    alignItems:"center", alignContent:"center"}}>
                    <img src={coin_img} alt={"coin_img"} width={"30px"}/>
                    <text style={{fontWeight: 'bold'}}>{props.price}</text>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <Button shape="circle"
                            style={{scale:"140%",
                                border:"1px solid black",
                                boxShadow: "2px 2px 2px 0 black"}}>
                        <EditOutlined/>
                    </Button>
                </div>
            </InfoContainer>
        </Card>
    );
}