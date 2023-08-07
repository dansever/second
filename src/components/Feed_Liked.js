import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row} from "antd";
import {collection, getDocs, query, where, documentId} from 'firebase/firestore';
import {db} from "../firebase";
import {AuthContext} from "./AuthProvider";
import MainCard from "./Card_Main";
import first from "../assets/images/first.png";
import styled from "styled-components";

const Picture = styled.img`
    width: 300px;
    height: 100%;
    margin-top: 15vh;
    object-fit: cover;
  
`;
export default function Feed_Liked() {
    const [likedProductsList, setLikedProductsList] = useState([]);
    const currentUser = useContext(AuthContext);
    const productsCollectionRef = collection(db,'products');
    const usersCollectionRef = collection(db,'users');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getProductList = async () => {
            try {
                const userDoc = query(usersCollectionRef,where(documentId(), '==', currentUser.uid));
                const data1 = await getDocs(userDoc);
                const LikedItemsId = data1.docs.map(doc => doc.data().liked_items);
                let filteredData = [];
                for (let arrayItem of Object.values(LikedItemsId)) {
                    for (let itemId of arrayItem.values()){
                        // alert(itemId);
                        const likedQuery = query(productsCollectionRef,where(documentId(), '==', itemId));
                        const data2 = await getDocs(likedQuery);
                        const a = data2.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id
                        }));
                        filteredData = [...filteredData, ...a];
                    }
                }
                // alert(filteredData);
                setLikedProductsList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };
        getProductList().then(() => setLoading(false));
    }, []);

    if (isLoading) {
        return(
            <div className="loading_feed">Loading...</div>
        )
    }

    return (
        <div>
            <div className="feed">
                {likedProductsList.length === 0 ? (
                    <div className="empty_feed">
                        <Picture src={first}/>
                        <p>There are no liked items yet!</p>
                    </div>
                ) : (
                    <Row gutter={[16, 16]}>
                        {likedProductsList.map((product, index) => (
                        <Col span={12}
                             key={index}>
                            <MainCard
                                isLiked = {true}
                                product_id = {product.id}
                                title={product.title}
                                seller_uid={product.seller_uid}
                                type={product.type}
                                gender={product.gender}
                                image_url={product.image_url}
                                brand={product.brand}
                                size={product.size}
                                condition={product.condition}
                            />
                        </Col>
                    ))}
                </Row>
                )}
            </div>
        </div>
    );
};