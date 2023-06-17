import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row, Select} from "antd";
import {collection, getDocs, query, orderBy, onSnapshot, where, documentId} from "firebase/firestore";
import {db} from "../firebase";
import ProductCard from "./Card";
// import {filterDatabase, NeighborhoodDict, sortDirection, sortType} from "../assets/DataSets";
import SearchBar from "./SearchBar";
import {AuthContext} from "./AuthProvider";

// const { Option } = Select;

export default function MainFeed() {
    const [productsList, setProductsList] = useState([]);
    const [sortBy, setSortBy] = useState('tokens');
    const [sortOrder, setSortOrder] = useState('asc');
    // const [neighborhoods, setNeighborhoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [likedItems, setLikedItems] = useState([]);
    const currentUser = useContext(AuthContext);
    const productsCollectionRef = collection(db,'products');
    const usersCollectionRef = collection(db,'users');


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

    const handleSortChange = (value) => {setSortBy(value);};
    const handleSortOrderChange = (value) => {setSortOrder(value);};

    //this will run once when the page uplod
    useEffect( () => {
        const getLikedItemList = async () => {
            const userDoc = query(usersCollectionRef, where(documentId(), '==', currentUser.uid));
            const data1 = await getDocs(userDoc);
            const LikedItemsId = data1.docs.map(doc => doc.data().liked_items);
            setLikedItems(LikedItemsId[0]);
            // console.log(LikedItemsId[0]);
        }
        getLikedItemList().then(() => setLoading(false));
    }, []);


    const isLiked = (product) => {
        // console.log(product.id, likedItems.includes(product.id));
        return likedItems.includes(product.id);
    }


    if (isLoading) {
        return(
            <div className="loading_feed">Loading...</div>
        )
    }
    return (
        <>
            <SearchBar handleSortChange={handleSortChange}
                       handleSortOrderChange={handleSortOrderChange} setProductsList={setProductsList}/>

            <div className="feed">
                <Row gutter={[16, 16]}>
                    {productsList.map((product, index) => (
                        <Col span={12}
                             key={index}>
                            <ProductCard
                                isLiked = {isLiked(product)}
                                product_id = {product.id}
                                title={product.title}
                                seller_uid={product.seller_uid}
                                unique_id={product.unique_id}
                                type={product.type}
                                gender={product.gender}
                                image_url={product.image_url}
                                brand={product.brand}
                                tokens={product.tokens}
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