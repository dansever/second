import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row} from "antd";
import {collection, getDocs, query, where, documentId} from 'firebase/firestore';
import {db} from "../firebase";
import {AuthContext} from "./AuthProvider";
import MainCard from "./Card_Main";



export default function Feed_Liked() {
    const [likedProductsList, setLikedProductsList] = useState([]);
    const currentUser = useContext(AuthContext);
    const productsCollectionRef = collection(db,'products');
    const usersCollectionRef = collection(db,'users');
    // const userDoc = collection(db,'products', currentUser.id);

    // useEffect(() => {
    //     const userId = currentUser.uid;
    //     const likedProductsRef = doc(db,'products',userId);
    //     }, []);

    useEffect(() => {
        const getProductList = async () => {
            try {
                const userDoc = query(usersCollectionRef,where(documentId(), '==', currentUser.uid));
                const data1 = await getDocs(userDoc);
                const LikedItemsId = data1.docs.map(doc => doc.data().liked_items);
                // alert(LikedItemsId);

                let filteredData = [];
                for (let arrayItem of Object.values(LikedItemsId)) {
                    for (let itemId of arrayItem.values()){
                        alert(itemId);
                        const likedQuery = query(productsCollectionRef,where(documentId(), '==', itemId));
                        const data2 = await getDocs(likedQuery);
                        const a = data2.docs.map(doc => doc.data());
                        filteredData = [...filteredData, ...a];
                    }
                }
                // alert(filteredData);
                setLikedProductsList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };
        getProductList();
    }, []);

    return (
        <div>
            <div className="feed">
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
        </div>
        </div>
    );
};