import React, {useEffect, useState} from 'react';
import "../styles/Feed.css"
import MainCard from "./Card";
import {Col, Row} from "antd";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";


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
                        <MainCard isLiked = {false}
                            title={card.title}
                            type={card.type}
                            image_ref={"https://firebasestorage.googleapis.com/v0/b/second-app-2529e.appspot.com/o/product_images%2Fadidas%20swater.jpg5240839e-752a-44f4-8910-ea93d589357b?alt=media&token=5ce70508-12c0-424c-917b-10eaa8439b4a"}
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