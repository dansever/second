import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row} from "antd";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase";
import MyCard from "./Card_MyProfile";
import {AuthContext} from "./AuthProvider";
import Confetti from './Confetti';

export default function Feed_MyProfile(
    {setItemsDonated, itemsDonated, setCo2Saved, co2Saved}) {
    const [productsList, setProductsList] = useState([]);
    const productsCollectionRef = collection(db,'products');
    const currentUser = useContext(AuthContext);
    const [collectionToggle, setCollectionToggle] = useState(false);
    const [isConfetti, setConfetti] = useState(false);

    useEffect(() => {
        const getProductList = async () => {
            try {
                const userUploads = query(productsCollectionRef,where('seller_uid', '==', currentUser.uid));
                const data = await getDocs(userUploads);
                const filteredData = data.docs.map(doc => doc.data());
                setProductsList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };
        getProductList();
    }, [collectionToggle]);


    if (isLoading) {
        return(
            <div className="loading_feed">Loading...</div>
        )
    }

    return (
        <div className="feed">
            {productsList.length === 0 ? (
                <div className="empty_feed">
                    <Picture src={last}/>
                    <p>You didn't upload items yet!</p>
                </div>
            ) : (
                <Row gutter={[16, 16]}>
                    {productsList.map((product, index) => (
                        <Col span={12}
                             key={index}>
                            <MyCard
                                isLiked = {false}
                                brand={product.brand}
                                condition={product.condition}
                                gender={product.gender}
                                image_url={product.image_url}
                                product_id = {product.product_id}
                                size={product.size}
                                title={product.title}
                                type={product.type}
                                setItemsDonated = {setItemsDonated}
                                itemsDonated = {itemsDonated}
                                setCo2Saved = {setCo2Saved}
                                co2Saved = {co2Saved}
                                collectionToggle = {collectionToggle}
                                setCollectionToggle = {setCollectionToggle}
                                setConfetti = {setConfetti}
                            />
                        </Col>
                    ))}
                </Row>
                )}
            {isConfetti && <Confetti/>}
        </div>
    );
};