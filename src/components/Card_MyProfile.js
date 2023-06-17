import React, {useContext, useState} from 'react';
import {EditOutlined} from "@ant-design/icons";
import {conditionOptions, genderOptions,
    sizeOptions, typeOptions} from "../assets/DataSets";
import {doc, updateDoc, deleteDoc, getDoc, arrayRemove} from "firebase/firestore";
import {deleteObject} from "firebase/storage";
import {Button, Form, InputNumber, message, Modal, Select, Tooltip} from "antd";
import Card from '@mui/material/Card';
import {db, storage} from "../firebase";
import "../styles/Card.css"
import {ref} from "firebase/storage";
import { GiReceiveMoney } from "react-icons/gi";
import {AuthContext} from "./AuthProvider";
const { Option } = Select;


export default function MyCard (product) {
    const [title, setTitle] = useState(product.title);
    const [type, setType] = useState(product.type);
    const [size, setSize] = useState(product.size);
    const [brand, setBrand] = useState(product.brand);
    const [condition, setCondition] = useState(product.condition);
    const [gender, setGender] = useState(product.gender);
    const [productId, setProductId] = useState(product.product_id);
    const [tokens, setTokens] = useState(product.tokens);

    const [editItemModalVisible, setEditItemModalVisible] = useState(false);

    const cardStyle = { borderRadius: '20px', boxShadow: '0 4px 6px black', position: 'relative'};

    const handleEditItemModalOpen = () => { setEditItemModalVisible(true); };
    const handleEditItemModalClose = () => { setEditItemModalVisible(false); };

    const handleItemInfoEdit = async (e) => {
        e.preventDefault();
        console.log("product_id: " + productId);
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


    const currentUser = useContext(AuthContext);
    // const [userId, setUserId] = useState("");

    // useEffect(() => {
    //     setUserId(currentUser.uid);
    // }, [currentUser]);

    const handleDeleteItem = async (e) => {
        e.preventDefault();

        try {
            //get refs
            const productRef = doc(db,'products',productId);
            const productSnapshot = await getDoc(productRef);
            const imageFilename = productSnapshot.data()['image_filename'];
            const storageRef = ref(storage, `product_images/${imageFilename}`);

            //delete item doc from database
            await deleteDoc(productRef);
            console.log("delete item successfully")

            //delete item image from storage
            await deleteObject(storageRef);
            console.log("Image deleted successfully.");

            // delete item entry in uploaded_items array
            await updateDoc( doc(db,'users',currentUser.uid), {
                uploaded_items: arrayRemove(productId)
            });
        } catch (error) {
            console.log('Something went wrong in item delete process.');
        }
    };


    const handleSizeChange      = (value) => { setSize(value); };
    const handleTypeChange      = (value) => { setType(value); };
    const handleGenderChange    = (value) => { setGender(value); };
    const handleConditionChange = (value) => { setCondition(value); };
    const handleTokensChange = (value) => { setTokens(value); };


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

            <div style={{position: 'absolute',
                top: '80px',
                right: '20px'}}>
                <Tooltip title="Mark Item as Sold">
                    <Button shape="circle"
                            style={{scale: "140%",
                                border: "1px solid black",
                                boxShadow: "2px 2px 2px 0 black"}}
                            onClick = {(e) => console.log("continue")}>
                        <GiReceiveMoney scale="150%"/>
                    </Button>
                </Tooltip>
            </div>

            <div className={"content-box"}>
                <h3>{title}</h3>
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

                        <Form.Item
                            style={{marginBottom:"0"}}>
                            <InputNumber
                                value={tokens} placeholder={tokens ? {tokens} : "tokens"}
                                onChange={handleTokensChange}
                                min={0}
                                max={5}
                                style = {{width: '200px'}}
                            />
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