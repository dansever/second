import React, {useContext, useState} from 'react';
import {EditOutlined, HeartFilled,
    HeartOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {conditionOptions, genderOptions,
    sizeOptions, typeOptions} from "../assets/DataSets";
import {doc, updateDoc, deleteDoc, arrayUnion, arrayRemove, getDoc} from "firebase/firestore";
import {deleteObject} from "firebase/storage";
import {Button, Form, Input, message, Modal, Select, Tooltip} from "antd";
import {AuthContext} from "./AuthProvider";
import Card from '@mui/material/Card';
import {db, storage} from "../firebase";
import Colors from "../color";
import "../styles/Card.css"
import {ref} from "firebase/storage";
const { Option } = Select;

export default function MainCard(product) {
    const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
    const [modalVisible, setModalVisible] = useState(false);
    const [sellerPhoneNumber, setSellerPhoneNumber] = useState('');

    const [whatsappLink, setWhatsappLink] = useState('');
    const currentUser = useContext(AuthContext);
    const currentUserRef = doc(db, 'users', currentUser.uid);
    const product_id = product.product_id;
    const product_title = product.title

    const cardStyle = {
        borderRadius: '20px',
        boxShadow: '0 4px 6px black',
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
    const getSellerPhoneNumber = async () => {
        try {
            const SellerUserRef = doc(db, 'users', product.seller_uid);
            const docSnapshot = await getDoc(SellerUserRef);
            setSellerPhoneNumber(docSnapshot.data()['phone_number']);
        } catch (err) {
            console.log(err);
        }
    };

    const getWhatsappLink = async () => {
        try {
            const SellerUserRef = doc(db, 'users', product.seller_uid);
            const docSnapshot = await getDoc(SellerUserRef);
            const sellerPhoneNumber = docSnapshot.data()['phone_number'];
            const message = "Hi, I'm interested in your product: " + product_title + "!";
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
                                    style={{ scale: "120%", color: "red" }}/>
                                : <HeartOutlined
                                    style={{ scale: "120%", color: "black" }}/>}
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
                <p>condition: {product.condition}</p>

                <div className={"step-box"}>
                    <Button className={"chat-or-pay-btn"}
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer">
                        <WhatsAppOutlined style={{scale: "160%", color: "green"}}/>
                        <h3>Chat with seller for info</h3>
                    </Button>
                </div>
            </Modal>
        </>
    );
}