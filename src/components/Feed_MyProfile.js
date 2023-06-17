import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row} from "antd";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase";
import MyCard from "./Card_MyProfile";
import {AuthContext} from "./AuthProvider";


export default function Feed_MyProfile() {
    const [productsList, setProductsList] = useState([]);
    const productsCollectionRef = collection(db,'products');
    const currentUser = useContext(AuthContext);

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
    }, []);

    return (
        <div className="feed">
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
                            tokens={product.tokens}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};