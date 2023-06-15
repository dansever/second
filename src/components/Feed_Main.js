import React, {useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row, Select} from "antd";
import {collection, getDocs, query, orderBy, onSnapshot  } from "firebase/firestore";
import {db} from "../firebase";
import MainCard from "./Card_Main";
import SearchBar from "./SearchBar";

const { Option } = Select;

export default function Feed_Main() {
    const [productsList, setProductsList] = useState([]);
    const [sortBy, setSortBy] = useState('tokens');
    const [sortOrder, setSortOrder] = useState('asc');
    const [neighborhoods, setNeighborhoods] = useState([]);
    const productsCollectionRef = collection(db,'products');

    const getProductList = async () => {
        try {
            const sortedProductsCollectionRef = query(productsCollectionRef,
                orderBy( sortBy, sortOrder));
            const data = await getDocs(sortedProductsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setProductsList(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProductList();
    }, [sortBy, sortOrder]);

    useEffect(() => {
        const snap = onSnapshot(productsCollectionRef, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                // Handle document changes here
                if (change.type === 'added') {
                    getProductList();
                }
                if (change.type === 'modified') {
                    getProductList();
                }
                if (change.type === 'removed') {
                    getProductList();
                }
            });
        });
    }, []);

    //
    // const handleNeighborhoodFilterChange = (value) => {
    //
    //     setProductsList(neighborhood_filter);
    //     // setNeighborhoods(value);
    // };
    const handleSortChange = (value) => {setSortBy(value);};
    const handleSortOrderChange = (value) => {setSortOrder(value);};


    return (
        <>
            <SearchBar handleSortChange={handleSortChange}
                       handleSortOrderChange={handleSortOrderChange} setProductsList={setProductsList}/>

            <div className="feed">
                <Row gutter={[16, 16]}>
                    {productsList.map((product, index) => (
                        <Col span={12}
                             key={index}>
                            <MainCard
                                isLiked = {false}
                                product_id = {product.id}
                                title={product.title}
                                seller_uid={product.seller_uid}
                                tokens={product.tokens}
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
        </>
    );
};