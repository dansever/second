import React, {useContext, useEffect, useState} from 'react';
import {EditOutlined} from "@ant-design/icons";
import {conditionOptions, genderOptions,
    sizeOptions, typeOptions} from "../assets/DataSets";
import {doc, updateDoc, deleteDoc, getDoc, arrayRemove} from "firebase/firestore";
import {deleteObject} from "firebase/storage";
import {Button, Form, message, Modal, Select, Tooltip} from "antd";
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
    const productId = useState(product.product_id);

    const [editItemModalVisible, setEditItemModalVisible] = useState(false);
    const [markSoldModalVisible, setMarkSoldModalVisible] = useState(false);

    const currentUser = useContext(AuthContext);
    const cardStyle = { borderRadius: '20px', boxShadow: '0 4px 6px black', position: 'relative'};

    useEffect(() => {}, []);

    const handleItemInfoEdit = async (e) => {
        e.preventDefault();
        try {
            const productRef = doc(db,'products',product.product_id);
            const newData = {
                title: title,
                type: type,
                size: size,
                brand: brand,
                condition: condition,
                gender: gender,
            };
            updateDoc(productRef, newData)
                .then( () => {
                    console.log('Item updated successfully');
                    message.success(
                        "Product updated successfully", 2,
                        () => {console.log('Pop-up closed');});
                })
        } catch (error) {
            console.log('Something went wrong, try again.');
        }
        setEditItemModalVisible(false);
    };

    const handleDeleteItem = async (e) => {
        e.preventDefault();
        try {
            const productRef = doc(db,'products',product.product_id);
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
            await updateDoc( doc(db,'users',currentUser.uid),
                {uploaded_items: arrayRemove(product.product_id)})
                .then(() => {
                    console.log('Item deleted successfully');
                    message.success(
                        "Item deleted successfully", 2,
                        () => {console.log('Pop-up closed');});
            })
        } catch (error) {
            console.log('Something went wrong in item delete process.');
        }
        setEditItemModalVisible(false);
    };

    const handleMarkItemAsSold = async (e) => {
        e.preventDefault();
        try {
            //await handleDeleteItem();
            const userRef = doc(db,'users',currentUser.uid);
            const userSnapshot = await getDoc(userRef);
            const itemsGiven = userSnapshot.data()['items_given'];
            await updateDoc(userRef,{items_given: itemsGiven + 1});
            console.log('Item marked as given.');
        }  catch (error) {
            console.log('Something went wrong');
        }
        setMarkSoldModalVisible(false);
    };

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
                            onClick={() => setEditItemModalVisible(true)}>
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
                            onClick={() => setMarkSoldModalVisible(true)}>
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
                   onCancel={() => setEditItemModalVisible(false)}
                   footer={[]} // Empty array to hide buttons>
            >
                <div className={"edit-info-modal"}>
                    <form className={"edit-info-form"}
                        onSubmit={handleItemInfoEdit}>

                        <input value={title}
                               placeholder={title ? {title} : "title"}
                               type="text"
                               onChange={(e) => setTitle(e.target.value)}
                        />
                        <input value={brand}
                               placeholder={brand ? {brand} : "brand"}
                               type="text"
                               onChange={(e) => setBrand(e.target.value)}
                        />

                        <Form.Item
                            style={{marginBottom: "0px"}}>
                            <Select
                                value={type} placeholder={type ? {type} : "type"}
                                allowClear="true"
                                onChange={(value) => { setType(value)}}
                                style={{width: '200px',}}>
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
                                onChange={(value) => { setSize(value)}}
                                style={{width: '200px'}}>
                                {sizeOptions.map((size) => (
                                    <Option key={size}
                                            value={size}>
                                        {size}</Option>))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{marginBottom:"0"}}>
                            <Select
                                value={gender} placeholder={gender ? {gender} : "gender"}
                                allowClear="true"
                                onChange={(value) => { setGender(value)}}
                                style = {{width: '200px'}}>
                                {genderOptions.map((gender) => (
                                    <Option key={gender}
                                            value={gender}>
                                        {gender}</Option>))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{marginBottom:"0"}}>
                            <Select
                                value={condition}
                                placeholder={condition ? {condition} : "condition"}
                                allowClear="true"
                                onChange={(value) => { setCondition(value)}}
                                style = {{width: '200px'}}>
                                {conditionOptions.map((condition) => (
                                    <Option key={condition} value={condition}>{condition}</Option>))}
                            </Select>
                        </Form.Item>

                        <div className={"update_delete_button_box"}>

                            <button className={"update-button"}
                                    type="submit">
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

            <Modal title="Are You Sure?"
                   open={markSoldModalVisible}
                   onCancel={() => setMarkSoldModalVisible(false)}
                   onOk={handleMarkItemAsSold}
                   style={{ maxWidth: '80%' }}>
            </Modal>

        </Card>
    );
}