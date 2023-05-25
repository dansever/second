import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {HeartFilled, HeartOutlined, EditOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {Button, Modal} from "antd";
import Card from '@mui/material/Card';
import coin_img from "../assets/images/coin.png";
import {useNavigate} from "react-router-dom";
import "../styles/Card.css"
import {AuthContext} from "./AuthProvider";
import {db} from "../firebase";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import {ref} from "firebase/storage";


const InfoContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
  padding-right: 7px;
  padding-left: 4px;
`;


const addProductToLikedItems = async (userUid, productId) => {
    const userRef = ref(db, `users/${userUid}`);
    userRef.child('liked_items').push(productId)
        .then(() => {
            console.log('Product added to liked_items array');
        })
        .catch((error) => {
            console.error('Error adding product to liked_items array:', error);
        });
};


// Remove product ID from the liked_items array in Firebase Firestore
const removeProductFromUser = async (currentUser, userUid, productId) => {
    const userRef = ref(db, `users/${userUid}`);
    await updateDoc(userRef, {
        liked_items: arrayRemove({productId})
    });
};



export default function ProductCard(product) {
    const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
    const [modalVisible, setModalVisible] = useState(false);
    const currentUser = useContext(AuthContext);
    const userUid = currentUser.uid; // Replace with the actual user UID
    const productId = product.id; // Replace with the actual product ID

    const cardStyle = {
        borderRadius: '20px',
        boxShadow: '0 4px 6px black'
    };

    const handleLike = (userUid, productId) => {
        setLikeToggledOn((prevState) => !prevState);
        if (isLikeToggledOn) {
            removeProductFromUser(userUid, productId);
        }
        else if (!isLikeToggledOn) {
            addProductToLikedItems(userUid, productId);
        }
    };

    const handleWhatsapp = () => {
    };

    const handleModalOpen = () => {setModalVisible(true);};
    const handleModalClose = () => {setModalVisible(false);};

    return (
        <>
            <Card style={cardStyle}>
                <div className={"img-box"} onClick={handleModalOpen}>
                    <img src={product.image_url} alt={product.alt}/>
                </div>

                <div className={"content-box"}>

                    <div className={"left-side"} onClick={handleModalOpen}>
                        <h3>    {product.title}             </h3>
                        <p>     Size:   {product.size}      </p>
                        <p>     Brand:  {product.brand}     </p>
                    </div>

                    <div className={"right-side"}>
                        <Button shape="circle"
                                className={"card_like_button"}
                                onClick={handleLike}>
                            {isLikeToggledOn ?
                                <HeartFilled
                                    style={{ scale: "120%", color: "red" }}/>
                                : <HeartOutlined
                                    style={{ scale: "120%", color: "black" }}/>}
                        </Button>
                        <Button shape="circle"
                                className={"card_like_button"}
                                onClick={handleWhatsapp}>
                            <WhatsAppOutlined
                                style={{ scale: "140%", color: "green" }}/>
                        </Button>
                    </div>
                </div>
            </Card>

            <Modal title={product.title}
                   open={modalVisible}
                   onCancel={handleModalClose}
                   footer={[]} // Empty array to hide buttons>
                >
                <p>{product.type}</p>
                <p>Price: {product.price}</p>
                <div className={"modal_icons"}>
                    <Button shape="square"
                            className={"card_like_button"}
                            onClick={handleLike}>
                        {isLikeToggledOn ?
                            <HeartFilled
                                style={{ scale: "120%", color: "red" }}/>
                            : <HeartOutlined
                                style={{ scale: "120%", color: "black" }}/>}
                    </Button>
                    <Button shape="square"
                            className={"card_like_button"}
                            onClick={handleWhatsapp}>
                        <WhatsAppOutlined
                            style={{ scale: "140%", color: "green" }}
                        />
                    </Button>
                </div>
            </Modal>
        </>
    );
}


// export function MyShopCard (product) {
//     const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
//     const [modalVisible, setModalVisible] = useState(false);
//     const currentUser = useContext(AuthContext);
//     const navigate = useNavigate();
//     const userUid = currentUser.uid; // Replace with the actual user UID
//     const productId = product.id; // Replace with the actual product ID
//
//     const cardStyle = {
//         borderRadius: '20px',
//         boxShadow: '0 4px 6px black'
//     };
//
//
//     const handleLike = (userUid, productId) => {
//         setLikeToggledOn((prevState) => !prevState);
//         if (isLikeToggledOn) {
//             removeProductFromUser(userUid, productId);
//         }
//         else if (!isLikeToggledOn) {
//             addProductToLikedItems(userUid, productId);
//         }
//     };
//
//     const handleWhatsapp = () => {
//
//     };
//
//     const handleModalOpen = () => {setModalVisible(true);};
//     const handleModalClose = () => {setModalVisible(false);};
//
//     return (
//         <>
//             <Card style={cardStyle}>
//                 <div className={"img-box"} onClick={handleModalOpen}>
//                     <img src={product.image_url} alt={product.alt}/>
//                 </div>
//
//                 <div className={"content-box"}>
//
//                     <div className={"left-side"} onClick={handleModalOpen}>
//                         <h3>    {product.title}             </h3>
//                         <p>     Size:   {product.size}      </p>
//                         <p>     Brand:  {product.brand}     </p>
//                     </div>
//
//                     <div className={"right-side"}>
//                         <Button shape="circle"
//                                 className={"card_like_button"}
//                                 onClick={handleLike}>
//                             {isLikeToggledOn ?
//                                 <HeartFilled
//                                     style={{ scale: "120%", color: "red" }}/>
//                                 : <HeartOutlined
//                                     style={{ scale: "120%", color: "black" }}/>}
//                         </Button>
//                         <Button shape="circle"
//                                 className={"card_like_button"}
//                                 onClick={handleWhatsapp}>
//                             <WhatsAppOutlined
//                                 style={{ scale: "140%", color: "green" }}/>
//                         </Button>
//                     </div>
//                 </div>
//             </Card>
//
//             <Modal title={product.title}
//                    open={modalVisible}
//                    onCancel={handleModalClose}
//                    footer={[]} // Empty array to hide buttons>
//             >
//                 <p>{product.type}</p>
//                 <p>Price: {product.price}</p>
//                 <div className={"modal_icons"}>
//                     <Button shape="circle"
//                             style={{scale:"140%",
//                                 border:"1px solid black",
//                                 boxShadow: "2px 2px 2px 0 black"}}>
//                         <EditOutlined/>
//                     </Button>
//                 </div>
//             </Modal>
//         </>
//     );
// }



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