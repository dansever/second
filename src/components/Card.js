import React, {useContext, useState} from 'react';
import {EditOutlined, HeartFilled, HeartOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {Button, Form, message, Modal, Select, Tooltip} from "antd";
import Card from '@mui/material/Card';
import "../styles/Card.css"
import {AuthContext} from "./AuthProvider";
import {db} from "../firebase";
import {doc, updateDoc, arrayUnion, arrayRemove, getDoc} from "firebase/firestore";
import Colors from "../color";
import {conditionOptions, genderOptions, sizeOptions, typeOptions} from "../assets/DataSets";

const { Option } = Select;


export default function ProductCard(product) {
    const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
    const [modalVisible, setModalVisible] = useState(false);
    const [whatsappModalVisible, setWhatsappModalVisible] = useState(false);
    const [sellerPhoneNumber, setSellerPhoneNumber] = useState('');

    const currentUser = useContext(AuthContext);
    const currentUserRef = doc(db, 'users', currentUser.uid);
    const product_id = product.product_id;

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
    const handleModalOpen = () => {setModalVisible(true);};
    const handleModalClose = () => {setModalVisible(false);};
    const handleWhatsappModalOpen = () => {setWhatsappModalVisible(true);};
    const handleWhatsappModalClose = () => {setWhatsappModalVisible(false);};

    const getSellerPhoneNumber = async () => {
        try {
            const SellerUserRef = doc(db, 'users', product.seller_uid);
            const docSnapshot = await getDoc(SellerUserRef);
            setSellerPhoneNumber(docSnapshot.data()['phone_number']);
        } catch (err) {
            console.log(err);
        }
    };

    /**
    useEffect(() => {
        // getSellerPhoneNumber();
    }, [product]);
    **/

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
                        <p>Price: {product.tokens}</p>
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
                <p>Price: {product.tokens}</p>
                <p>Brand: {product.brand}</p>
                <p>Gender: {product.gender}</p>
                <p>Size: {product.size}</p>
                <p>condition: {product.condition}</p>
                <p>seller phone number: {sellerPhoneNumber} </p>
            </Modal>

            {/*WHATSAPP MODAL*/}
            <Modal title="Seller Phone Number:"
                   open={whatsappModalVisible}
                   onCancel={handleWhatsappModalClose}
                   footer={[]} // Empty array to hide buttons>
            >
                <div className={"whatsapp-modal"}>
                    <h3
                        style={{fontWeight:"bold"}}>
                        0546436246
                    </h3>
                    <Button shape="square"
                            className={"card_like_button"}
                            onClick={handleWhatsappModalOpen}>
                        <WhatsAppOutlined
                            style={{ scale: "140%", color: "green" }}
                        />
                    </Button>
                </div>
            </Modal>

        </>
    );
}

<Button href="whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND">
<WhatsAppOutlined
style={{scale: "140%", color: "green" }}/>Chat for more details or claiming product
</Button>



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
                    <form onSubmit={handleItemInfoEdit}>

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


                        <button className={"update-button"} type="submit">
                            Update Item Information
                        </button>
                    </form>
                </div>
            </Modal>

        </Card>
    );
}