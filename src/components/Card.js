import React, {useState} from 'react';
import styled from "styled-components";
import {HeartFilled, HeartOutlined, EditOutlined} from "@ant-design/icons";
import {Button} from "antd";
import Card from '@mui/material/Card';
import coin_img from "../assets/images/coin.png";
import {useNavigate} from "react-router-dom";
import "../styles/Card.css"
import Colors from "../color";

const CardStyle = styled.div`
  border-radius: 30px;
  border: 1px solid black;
  height: 200px;
  width: 160px;
  box-shadow: 3px 4px 0 0 black;
  &:hover {
    scale: 103%;
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  border-bottom: 2px solid black;
  height: 60%;
`;

const InfoContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
  padding-right: 7px;
  padding-left: 4px;
`;

export default function MainCard(props) {

    const [isLikeToggledOn, setLikeToggledOn] = useState(props.isLiked);
    const navigate = useNavigate();

    const navigateToProduct = () => {
        navigate("/Search/:id");
    };

    const handleLike = () => {
        setLikeToggledOn((prevState) => !prevState);
    };

    return (
        <Card className={"main-card"}>
            <div className={"img-box"}>
                <img src={props.img_url} alt={props.img_desc} />
            </div>
            <div className={"content-box"}>
                <div className={"left-side"}>
                    <h2
                        style={{
                            display:"flex",
                            justifyContent:"center",
                        color: Colors.primary_green}}>
                        {props.title}</h2>
                    <p>Price: ${props.price}</p>
                    <p>Size: {props.size}</p>
                    <p>Brand: {props.brand}</p>
                </div>
                <div className={"right-side"}>
                    <Button shape="circle"
                            style={{scale:"150%",
                                border:"0.1px solid black",
                                boxShadow: "1px 1px 1px 0 black",
                                backgroundColor: "#F1F7F1"}}
                            onClick={handleLike}>
                        {isLikeToggledOn ?
                            <HeartFilled style={{ scale: "105%", color: "red" }}/>
                            : <HeartOutlined style={{ color: "black" }}/>}
                    </Button>
                </div>
            </div>
        </Card>

        // <Card hoverable
        //       style={{
        //           borderRadius: '0px',
        //           border: '1px solid black',
        //           boxShadow: '3px 4px 0 0 black',
        //       }}
        //       cover={<img alt="cloth img" src={props.img}
        //                   onClick={navigateToProduct}/>}
        //       >
        //     <InfoContainer>
        //         <div style={{
        //             display:"flex",
        //             flexDirection:"column",
        //             justifyContent:"space-between",
        //             padding:"2px"}}>
        //
        //             <div style={{display:"flex",
        //                 flexDirection:"row",
        //                 alignItems:"center",
        //                 alignContent:"center",
        //                 columnGap:"5px"}}>
        //                 <text style={{fontWeight: 'bold'}}>Size:</text>
        //                 <text>{props.size}</text>
        //             </div>
        //
        //             <div style={{display:"flex",
        //                 flexDirection:"row",
        //                 alignItems:"center",
        //                 alignContent:"center",
        //                 columnGap:"5px"}}>
        //                 <text style={{fontWeight: 'bold'}}>Distance:</text>
        //                 <text>{props.location}</text>
        //             </div>
        //
        //             <div style={{display:"flex",
        //                 flexDirection:"row",
        //                 alignItems:"center",
        //                 alignContent:"center"}}>
        //                 <img src={coin_img} alt={"coin_img"} width={"30px"}/>
        //                 <text style={{fontWeight: 'bold'}}>{props.price}</text>
        //             </div>
        //         </div>
        //
        //         <div style={{display:"flex",
        //             alignItems:"center"}}>
        //             <Button shape="circle"
        //                     style={{scale:"120%",
        //                         border:"1px solid black",
        //                         boxShadow: "2px 2px 2px 0 black",
        //                         backgroundColor: "#F1F7F1"}}
        //                     onClick={handleLike}>
        //                 {isLikeToggledOn ?
        //                     <HeartFilled style={{ color: "red" }}/>
        //                     : <HeartOutlined style={{ color: "black" }}/>}
        //             </Button>
        //         </div>
        //     </InfoContainer>
        // </Card>
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