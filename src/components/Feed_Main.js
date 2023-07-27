import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row, Select} from "antd";
import {collection, getDocs, query, orderBy, onSnapshot, where, documentId} from "firebase/firestore";
import {db} from "../firebase";
import MainCard from "./Card_Main";
import SearchBar from "./SearchBar";
import {AuthContext} from "./AuthProvider";

const { Option } = Select;

export default function Feed_Main() {
    const [productsList, setProductsList] = useState([]);
    const [sortBy, setSortBy] = useState('upload_time');
    const [sortOrder, setSortOrder] = useState('asc');
    // const [neighborhoods, setNeighborhoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [likedItems, setLikedItems] = useState([]);
    const currentUser = useContext(AuthContext);
    const productsCollectionRef = collection(db,'products');
    const usersCollectionRef = collection(db,'users');
    // let userQuery;
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

    // const handleSortChange = (value) => {setSortBy(value);};
    // const handleSortOrderChange = (value) => {setSortOrder(value);};

    //this will run once when the page uplaod
    useEffect( () => {
        const getLikedItemList = async () => {
            const userDoc = await query(usersCollectionRef, where(documentId(), '==', currentUser.uid));
            const data1 = await getDocs(userDoc);
            const LikedItemsId = data1.docs.map(doc => doc.data().liked_items);
            setLikedItems(LikedItemsId[0]);
            // console.log(LikedItemsId[0]);
        }
        getLikedItemList().then(() => setLoading(false));
    }, []);

    if (isLoading) {
        return(
            <div className="loading_feed">Loading...</div>
        )
    }

    const isPassFilter = ({size, gender, condition, type, seller_neighborhood}) => {
        const passSize = !filter.size || filter.size.includes(size);
        const passGender = !filter.gender || filter.gender.includes(gender);
        const passCondition = !filter.condition || filter.condition.includes(condition);
        const passType = !filter.type || filter.type.includes(type);
        const passNeighborhood = neighborhoodFilter.length === 0 || neighborhoodFilter.includes(seller_neighborhood);
        return passSize && passGender && passType && passCondition && passNeighborhood;
    };

    const isLiked = (product_id) => {
        if (likedItems.length === 0){
            return false;
        }
        return likedItems.includes(product_id);
    }

    const createdCards = productsList.filter(isPassFilter).map((product, index) => (
            <Col span={12}
                 key={index}>
                <MainCard
                    isLiked = {isLiked(product.id)}
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
                    setLikedItems ={setLikedItems}
                />
            </Col>
        ))
    return (
        <>
            <SearchBar filter={filter} setFilter={setFilter} neighborhoodFilter={neighborhoodFilter}
                       setNeighborhoodFilter={setNeighborhoodFilter} setSortBy={setSortBy} setSortOrder={setSortOrder} />

            <div className="feed">
                <Row gutter={[16, 16]}>
                    {createdCards}
                    {/*{productsList.map((product, index) => (*/}
                    {/*    <Col span={12}*/}
                    {/*         key={index}>*/}
                    {/*        <MainCard*/}
                    {/*            likedItems = {likedItems}*/}
                    {/*            product_id = {product.id}*/}
                    {/*            title={product.title}*/}
                    {/*            seller_uid={product.seller_uid}*/}
                    {/*            tokens={product.tokens}*/}
                    {/*            type={product.type}*/}
                    {/*            gender={product.gender}*/}
                    {/*            image_url={product.image_url}*/}
                    {/*            brand={product.brand}*/}
                    {/*            size={product.size}*/}
                    {/*            condition={product.condition}*/}
                    {/*            setLikedItems ={setLikedItems}*/}
                    {/*        />*/}
                    {/*    </Col>*/}
                    {/*))}*/}
                </Row>
            </div>
        </>
    );
};