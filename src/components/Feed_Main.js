import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row} from "antd";
import {collection, getDocs, query, orderBy, onSnapshot, where, documentId} from "firebase/firestore";
import {db} from "../firebase";
import MainCard from "./Card_Main";
import SearchBar from "./SearchBar";
import {AuthContext} from "./AuthProvider";

export default function Feed_Main() {
    const [productsList, setProductsList] = useState([]);
    const [sortBy, setSortBy] = useState('upload_time');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isLoading, setLoading] = useState(true);
    const [likedItems, setLikedItems] = useState([]);
    const currentUser = useContext(AuthContext);
    const productsCollectionRef = collection(db,'products');
    const usersCollectionRef = collection(db,'users');
    const [filter, setFilter] = useState({});
    const [neighborhoodFilter, setNeighborhoodFilter] = useState([]);


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
        onSnapshot(productsCollectionRef, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') { getProductList(); }
                if (change.type === 'modified') { getProductList(); }
                if (change.type === 'removed') { getProductList(); }
            });
        });
    }, []);

    //this will run once when the page upload
    useEffect( () => {
        const getLikedItemList = async () => {
            const userDoc = await query(usersCollectionRef, where(documentId(), '==', currentUser.uid));
            const data1 = await getDocs(userDoc);
            const LikedItemsId = data1.docs.map(doc => doc.data().liked_items);
            setLikedItems(LikedItemsId[0]);
        }
        getLikedItemList().then(() => setLoading(false));
    }, []);

    if (isLoading) {
        return(
            <div className="loading_feed">Loading...</div>
        )
    }

    const isPassFilter = ({size, gender, condition, type, seller_neighborhood, seller_uid}) => {
        const passUserId = seller_uid !== currentUser.uid;
        const passSize = !filter.size || filter.size.includes(size);
        const passGender = !filter.gender || filter.gender.includes(gender);
        const passCondition = !filter.condition || filter.condition.includes(condition);
        const passType = !filter.type || filter.type.includes(type);
        const passNeighborhood = neighborhoodFilter.length === 0 || neighborhoodFilter.includes(seller_neighborhood);
        return passSize && passGender && passType && passCondition && passNeighborhood && passUserId;
    };

    const isLiked = (product_id) => {
        if (likedItems.length === 0){
            return false;
        }
        return likedItems.includes(product_id);
    }

    const createdCards = productsList.filter(isPassFilter)
        .map((product, index) => (
            <Col span={12}
                 key={index}>
                <MainCard
                    isLiked = {isLiked(product.id)}
                    product_id = {product.id}
                    title={product.title}
                    seller_uid={product.seller_uid}
                    type={product.type}
                    gender={product.gender}
                    image_url={product.image_url}
                    brand={product.brand}
                    size={product.size}
                    condition={product.condition}
                    setLikedItems ={setLikedItems}
                />
            </Col>
        ))
    return (
        <>
            <SearchBar setFilter={setFilter}
                       setNeighborhoodFilter={setNeighborhoodFilter}
                       setSortBy={setSortBy}
                       setSortOrder={setSortOrder} />

            <div className="feed">
                <Row gutter={[16, 16]}>
                    {createdCards}
                </Row>
            </div>
        </>
    );
};