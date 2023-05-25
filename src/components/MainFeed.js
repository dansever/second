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
                {productsList.map((card, index) => (
                    <Col span={12}
                         key={index}>
                        <ProductCard isLiked = {false}
                            title={card.title}
                            type={card.type}
                            image_url={card.image_url}
                            img_desc={card.img_desc}
                            brand={card.brand}
                            size={card.size}
                            price={card.pr}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};