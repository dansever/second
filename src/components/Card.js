import React, {useState} from 'react';
import styled from "styled-components";
import {HeartFilled, HeartOutlined, EditOutlined, ArrowLeftOutlined} from "@ant-design/icons";
import {Button, Card} from "antd";
import coin_img from "../assets/images/coin.png";
import Colors from "../color";
import {useNavigate} from "react-router-dom";

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


export default function MainCard(props,{isLiked = false}) {
    const [isTitleShown, setIsTitleShown] = useState(false);
    const [isToggledOn, setIsToggledOn] = useState(isLiked);
    const navigate = useNavigate();

    const navigateToProduct = () => {
        navigate("/Search/:id");
    };

    const handleLikeProduct = () => {
        setIsToggledOn((prevState) => !prevState);
    };

    return (
        <Card className="card-item"
              hoverable
              style={{
                  borderRadius: '10px',
                  border: '1px solid black',
                  boxShadow: '3px 4px 0 0 black',
              }}
              cover={<img className={'imgItem'} alt="cloth img" src={props.img}
                          onClick={navigateToProduct}/>}
              >
            <InfoContainer>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    padding:"2px"}}>

                    <div style={{display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        alignContent:"center",
                        columnGap:"5px"}}>
                        <text style={{fontWeight: 'bold'}}>Size:</text>
                        <text>{props.size}</text>
                    </div>

                    <div style={{display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        alignContent:"center",
                        columnGap:"5px"}}>
                        <text style={{fontWeight: 'bold'}}>Distance:</text>
                        <text>{props.location}</text>
                    </div>

                    <div style={{display:"flex", flexDirection:"row",
                    alignItems:"center", alignContent:"center"}}>
                        <img src={coin_img} alt={"coin_img"} width={"30px"}/>
                        <text style={{fontWeight: 'bold'}}>{props.price}</text>
                    </div>
                </div>

                <div style={{display:"flex", alignItems:"center"}}>
                    <Button shape="circle"
                            style={{scale:"120%",
                                border:"1px solid black",
                                boxShadow: "2px 2px 2px 0 black",
                                backgroundColor: "#F1F7F1"}}
                            onClick={handleLikeProduct}>
                        {isToggledOn ?
                            <HeartFilled style={{ color: "red" }}/>
                            : <HeartOutlined style={{ color: "black" }}/>}
                    </Button>
                </div>
            </InfoContainer>
        </Card>
    );
}

export function MyShopCard (props) {
    const [isTitleShown, setIsTitleShown] = useState(false);
    const showTitle = () => {
        setIsTitleShown((prevState) => !prevState);
    };

    const handleClickCard = () => {
        setIsTitleShown((prevState) => !prevState);
    };

    return (
        <Card className="card-item"
              hoverable
              style={{
                  borderRadius: '10px',
                  border: '1px solid black',
                  boxShadow: '3px 4px 0 0 black',
              }}
              cover={<img className={'imgItem'} alt="cloth img" src={props.img} />}
              onClick={handleClickCard}>
            {isTitleShown &&
                <h3
                    style={{ position: 'absolute', top: 0, left: 0}}>
                    Blue Summer Dress
                </h3>}
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