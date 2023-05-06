import React, {useState} from 'react';
import styled from "styled-components";
import {HeartFilled, HeartOutlined, EditOutlined} from "@ant-design/icons";
import {Button} from "antd";
import coin_img from "../../assets/images/coin.png";
import Colors from "../../color";

const CardStyle = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  height: 200px;
  width: 190px;
  box-shadow: 3px 4px 0 0 black;
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


export default function MainCard({isLiked = false}) {
    const [isTitleShown, setIsTitleShown] = useState(false);
    const [isToggledOn, setIsToggledOn] = useState(isLiked);

    const handleClickCard = () => {
        setIsTitleShown((prevState) => !prevState);
    };

    const handleClickLike = () => {
        setIsToggledOn((prevState) => !prevState);
    };

    return (
        <CardStyle>
            <ImgContainer style={{ position: 'relative', paddingLeft:"5px"}}
                onClick={handleClickCard}>
                {isTitleShown &&
                    <h3
                        style={{ position: 'absolute', top: 0, left: 0}}>
                        Blue Summer Dress
                    </h3>}
            </ImgContainer>
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
                        <text> Small</text>
                    </div>

                    <div style={{display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        alignContent:"center",
                        columnGap:"5px"}}>
                        <text style={{fontWeight: 'bold'}}>Distance:</text>
                        <text> 1.2km</text>
                    </div>

                    <div style={{display:"flex", flexDirection:"row",
                    alignItems:"center", alignContent:"center"}}>
                        <img src={coin_img} alt={"coin_img"} width={"30px"}/>
                        <text style={{fontWeight: 'bold'}}>4</text>
                    </div>
                </div>

                <div style={{display:"flex", alignItems:"center"}}>
                    <Button shape="circle"
                            style={{scale:"120%",
                                border:"1px solid black",
                                boxShadow: "2px 2px 2px 0 black",
                                backgroundColor: "#F1F7F1"}}
                            onClick={handleClickLike}>
                        {isToggledOn ?
                            <HeartFilled style={{ color: "red" }}/>
                            : <HeartOutlined style={{ color: "black" }}/>}
                    </Button>
                </div>
            </InfoContainer>
        </CardStyle>
    );
}

export function MyShopCard () {
    const [isTitleShown, setIsTitleShown] = useState(false);
    const handleClickCard = () => {
        setIsTitleShown((prevState) => !prevState);
    };
    return (
        <CardStyle>
            <ImgContainer style={{ position: 'relative', paddingLeft:"5px"}}
                          onClick={handleClickCard}>
                {isTitleShown &&
                    <h3
                        style={{ position: 'absolute', top: 0, left: 0}}>
                        Blue Summer Dress
                    </h3>}
            </ImgContainer>
            <InfoContainer style={{display:"flex",justifyContent:"space-around"}}>
                <div style={{display:"flex", flexDirection:"row",
                    alignItems:"center", alignContent:"center"}}>
                    <img src={coin_img} alt={"coin_img"} width={"30px"}/>
                    <text style={{fontWeight: 'bold'}}>4</text>
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
        </CardStyle>
    );
}