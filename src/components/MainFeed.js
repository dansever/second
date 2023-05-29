import React, {useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row} from "antd";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import ProductCard from "./Card";


export default function MainFeed() {
    const [productsList, setProductsList] = useState([]);
    const productsCollectionRef = collection(db,'products');

    useEffect(() => {
        const getProductList = async () => {
            try {
                const data = await getDocs(productsCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
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
                        <ProductCard
                            isLiked = {false}
                            product_id = {product.id}
                            title={product.title}
                            seller_uid={product.seller_uid}
                            unique_id={product.unique_id}
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
    );
};