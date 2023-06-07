import React, {useContext, useState} from 'react';
import {EditOutlined, HeartFilled,
    HeartOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {conditionOptions, genderOptions,
    sizeOptions, typeOptions} from "../assets/DataSets";
import {doc, updateDoc, deleteDoc, arrayUnion, arrayRemove, getDoc} from "firebase/firestore";
import {deleteObject} from "firebase/storage";
import {Button, Form, message, Modal, Select, Tooltip} from "antd";
import {AuthContext} from "./AuthProvider";
import Card from '@mui/material/Card';
import {db, storage} from "../firebase";
import Colors from "../color";
import "../styles/Card.css"
import {ref} from "firebase/storage";
const { Option } = Select;

export default function ProductCard(product) {
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
            console.log("aaa")
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
                        <p>Size: {product.size}</p>
                        <p>Tokens: {product.tokens}</p>
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
                <p>Tokens: {product.tokens}</p>
                <p>Brand: {product.brand}</p>
                <p>Gender: {product.gender}</p>
                <p>Size: {product.size}</p>
                <p>condition: {product.condition}</p>

                <Button className={"go-to-whatsapp-btn"}
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{width:"100%",
                            display:"flex",
                            flexDirection:"row",
                            alignItems:"center",
                            fontWeight:"bold"}}
                >
                    <WhatsAppOutlined style={{scale: "160%", color: "green"}}/>
                    Chat to get more details and claim product!
                </Button>
            </Modal>
        </>
    );
}

export function MyItemCard (product) {
    const [title, setTitle] = useState(product.title);
    const [type, setType] = useState(product.type);
    const [size, setSize] = useState(product.size);
    const [brand, setBrand] = useState(product.brand);
    const [condition, setCondition] = useState(product.condition);
    const [gender, setGender] = useState(product.gender);
    const [tokens, setTokens] = useState(product.tokens);
    const [productId, setProductId] = useState(product.product_id);


    const [editItemModalVisible, setEditItemModalVisible] = useState(false);


    const cardStyle = {
        borderRadius: '20px',
        boxShadow: '0 4px 6px black',
        position: 'relative'
    };

    const handleEditItemModalOpen = () => {
        setEditItemModalVisible(true);
    };
    const handleEditItemModalClose = () => {
        setEditItemModalVisible(false);
    };


    const handleItemInfoEdit = async (e) => {
        e.preventDefault();
        try {
            const productRef = doc(db,'products',productId);
            const newData = {
                title: title,
                type: type,
                size: size,
                brand: brand,
                condition: condition,
                gender: gender,
                tokens: tokens,
            };
            updateDoc(productRef, newData)
                .then( () => {
                    console.log('Item updated successfully');
                    message.success(
                        "User updated successfully", 1, () => {
                            console.log('Pop-up closed');
                        });
                })
        } catch (error) {
            console.log('Something went wrong. Please try again.');
        }
    };



    const handleDeleteItem = async (e) => {
        e.preventDefault();
        try {
            //get refs
            const productRef = doc(db,'products',productId);
            const productSnapshot = await getDoc(productRef);
            const imageFilename = productSnapshot.data()['image_filename'];
            const storageRef = ref(storage, `product_images/${imageFilename}`);
            //start deleting stuff
            await deleteDoc(productRef);
            console.log("delete item successfully")
            await deleteObject(storageRef);
            console.log("Image deleted successfully.");
        } catch (error) {
            console.log('Something went wrong in item delete process.');
        }
    };


    const handleSizeChange      = (value) => { setSize(value); };
    const handleTypeChange      = (value) => { setType(value); };
    const handleGenderChange    = (value) => { setGender(value); };
    const handleConditionChange = (value) => { setCondition(value); };

    return (
        <Card style={cardStyle}>
            <div className={"img-box"}>
                <img src={product.image_url}
                     alt={product.alt}/>
            </div>
            <div style={{position: 'absolute', top: '20px', right: '20px'}}>
                <Tooltip title="Edit Item">
                    <Button shape="circle"
                            style={{scale: "140%", border: "1px solid black", boxShadow: "2px 2px 2px 0 black"}}
                            onClick={handleEditItemModalOpen}>
                        <EditOutlined/>
                    </Button>
                </Tooltip>
            </div>

            <div className={"content-box"}>
                <p>{title}</p>
            </div>

            {/*EDIT INFO MODAL*/}
            <Modal title="Edit Item Information"
                   open={editItemModalVisible}
                   onCancel={handleEditItemModalClose}
                   footer={[]} // Empty array to hide buttons>
            >
                <div className={"edit-info-modal"}>
                    <form className={"edit-info-form"}
                        onSubmit={handleItemInfoEdit}>

                        <input value={title} placeholder={title ? {title} : "title"}
                               type="text" onChange={(e) => setTitle(e.target.value)}
                        />
                        <input value={brand} placeholder={brand ? {brand} : "brand"}
                               type="text" onChange={(e) => setBrand(e.target.value)}
                        />

                        <input value={tokens} placeholder={tokens ? {tokens} : "tokens"}
                               type="number" min={0} max={10}
                               onChange={(e) => setTokens(e.target.value)}
                        />

                        <Form.Item
                            style={{marginBottom: "0px"}}>
                            <Select
                                value={type} placeholder={type ? {type} : "type"}
                                allowClear="true"
                                onChange={handleTypeChange} style={{width: '200px',}}>
                                {typeOptions.map((type_) => (
                                    <Option key={type_} value={type_}>
                                        {type_}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{marginBottom: "0"}}>
                            <Select
                                value={size} placeholder={size ? {size} : "size"}
                                allowClear="true"
                                onChange={handleSizeChange}
                                style={{width: '200px'}}>
                                {sizeOptions.map((size) => (
                                    <Option key={size} value={size}>{size}</Option>))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{marginBottom:"0"}}>
                            <Select
                                value={gender} placeholder={gender ? {gender} : "gender"}
                                allowClear="true"
                                onChange={handleGenderChange}
                                style = {{width: '200px'}}>
                                {genderOptions.map((gender) => (
                                    <Option key={gender} value={gender}>{gender}</Option>))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{marginBottom:"0"}}>
                            <Select
                                value={condition} placeholder={condition ? {condition} : "condition"}
                                allowClear="true"
                                onChange={handleConditionChange}
                                style = {{width: '200px'}}>
                                {conditionOptions.map((condition) => (
                                    <Option key={condition} value={condition}>{condition}</Option>))}
                            </Select>
                        </Form.Item>

                        <div className={"update_delete_button_box"}>

                            <button className={"update-button"} type="submit">
                                Update Item Info
                            </button>

                            <button className={"delete-btn"}
                                    onClick={handleDeleteItem}>
                                Delete Item
                            </button>
                        </div>

                    </form>
                </div>
            </Modal>

        </Card>
    );
}