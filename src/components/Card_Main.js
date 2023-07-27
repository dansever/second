import React, {useContext, useEffect, useState} from 'react';
import { HeartFilled, HeartOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {doc, updateDoc, arrayUnion, arrayRemove, getDoc} from "firebase/firestore";
import {Button, Input, message, Modal} from "antd";
import {AuthContext} from "./AuthProvider";
import Card from '@mui/material/Card';
import {db} from "../firebase";
import Colors from "../color";
import "../styles/Card.css"
import {bool} from "prop-types";

export default function MainCard(product) {
    // const linkedItemsLocal = product.likedItems.includes(product.product_id);
    const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
    const [modalVisible, setModalVisible] = useState(false);
    const [whatsappLink, setWhatsappLink] = useState('');
    const currentUser = useContext(AuthContext);
    const currentUserRef = doc(db, 'users', currentUser.uid);
    const product_id = product.product_id;

    const cardStyle = {
        borderRadius: '20px',
        // boxShadow: '0 2px 3px black',
        cursor: 'pointer',
     };

    const likeAction = () => {
        updateDoc(currentUserRef, {
            liked_items: arrayUnion(product_id)
        });
    }
    const unlikeAction = () => {
        updateDoc(currentUserRef, {
            liked_items: arrayRemove(product_id)
        });

    }
    const handleLike = async () => {
        setLikeToggledOn(!isLikeToggledOn);
        if (isLikeToggledOn) {
            unlikeAction();
        }
        else {
            likeAction();
        }
    }


    useEffect(() => {
        const getSellerCode = async () => {
            try {
                const SellerUserRef = doc(db, 'users', product.seller_uid);
                const docSnapshot = await getDoc(SellerUserRef);
                //setSellerCode(docSnapshot.data()['user_code']);
            } catch (err) {
                console.log(err);
            }
        };
        getSellerCode();
    }, []);

    const getWhatsappLink = async () => {
        try {
            const SellerUserRef = doc(db, 'users', product.seller_uid);
            const docSnapshot = await getDoc(SellerUserRef);
            const sellerPhoneNumber = docSnapshot.data()['phone_number'];
            const message = "Hi, I'm interested in your product: " + product.title + "!";
            const number = sellerPhoneNumber.slice(1);
            const encodedMessage = encodeURIComponent(message);
            const link = "https://wa.me/972" + number + "?text=" + encodedMessage;
            setWhatsappLink(link);
        } catch (err) {
            console.log(err);
        }
    }
    const handleModalOpen = () => {setModalVisible(true);
        getWhatsappLink();};
    const handleModalClose = () => {setModalVisible(false);};

    const isLikedComponent = () => {
        if (product.likedItems.includes(product.product_id)){
            return
        }
        return
    }
    return (
        <>
            <Card style={cardStyle}>
                <div className={"img-box"}
                     onClick={handleModalOpen}>
                    <img src={product.image_url}
                         alt={product.alt}/>
                </div>

                <div className={"content-box"}>

                    <div className={"left-side"}
                         onClick={handleModalOpen}>
                        <p style={{fontWeight:"bold"}}>{product.title}</p>
                        <p>Size: {product.size}</p>
                    </div>

                    <div className={"right-side"}>
                        <Button shape="circle"
                                className={"card_like_button"}
                                onClick={handleLike}>
                            {isLikeToggledOn ?
                                <HeartFilled
                                    style={{ scale: "120%", color: "red" }}/> :
                                <HeartOutlined
                                    style={{ scale: "120%", color: "black" }}/>
                            }
                        </Button>
                    </div>
                </div>
            </Card>

            {/*MAIN MODAL*/}
            <Modal className={"custom-modal"}
                   open={modalVisible}
                   onCancel={handleModalClose}
                   footer={[]} // Empty array to hide buttons>
                >
                <h2 style={{color:Colors.dark_green}}>
                    {product.title}
                </h2>
                <div className={"img-box-modal"}
                     onClick={handleModalOpen}>
                    <img src={product.image_url}
                         alt={product.alt}/>
                </div>

                <p>Type: {product.type}</p>
                <p>Brand: {product.brand}</p>
                <p>Gender: {product.gender}</p>
                <p>Size: {product.size}</p>
                <p>Condition: {product.condition}</p>

                <div className={"step-box"}>
                    <Button className={"chat-or-pay-btn"}
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{width:"80%"}}>
                        <WhatsAppOutlined style={{scale: "160%", color: "green"}}/>
                        <h3>Chat with seller for info</h3>
                    </Button>
                </div>

            </Modal>
        </>
    );
}