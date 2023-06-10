import React, {useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row, Select, TreeSelect} from "antd";
import {collection, getDocs, query, orderBy, onSnapshot  } from "firebase/firestore";
import {db} from "../firebase";
import ProductCard from "./Card";
import {filterDatabase, NeighborhoodDict, sortDirection, sortType} from "../assets/DataSets";
import SearchBar from "./SearchBar/SearchBar";

const { Option } = Select;

export default function MainFeed() {
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


    const handleNeighborhoodFilterChange = (value) => {setNeighborhoods(value);};
    const handleSortChange = (value) => {setSortBy(value);};
    const handleSortOrderChange = (value) => {setSortOrder(value);};


    return (
        <>
            {/*<div className={"filter-sort-container"}>*/}
            {/*    <div>*/}
            {/*        <TreeSelect*/}
            {/*            treeData = {filterDatabase}*/}
            {/*            treeCheckable*/}
            {/*            allowClear="true"*/}
            {/*            showCheckedStrategy="SHOW_CHILD"*/}
            {/*            placeholder="Filter by"*/}
            {/*            onChange={handleNeighborhoodFilterChange}*/}
            {/*            style={{ width: '93vw' }}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div>*/}

            {/*        <TreeSelect*/}
            {/*            treeData = {NeighborhoodDict}*/}
            {/*            treeCheckable*/}
            {/*            defaultValue={neighborhoods}*/}
            {/*            allowClear="true"*/}
            {/*            showCheckedStrategy="SHOW_CHILD"*/}
            {/*            placeholder="Neighborhood"*/}
            {/*            onChange={handleNeighborhoodFilterChange}*/}
            {/*            style={{ width: '45vw' }}*/}
            {/*        />*/}

            {/*        <Select*/}
            {/*            placeholder="Sort by"*/}
            {/*            onChange={handleSortChange}*/}
            {/*            allowClear="true"*/}
            {/*            defaultValue={sortBy}*/}
            {/*            style = {{width:'24vw'}}>*/}
            {/*            >*/}
            {/*            {sortType.map((type_) => (*/}
            {/*                <Option key={type_} value={type_}>*/}
            {/*                    {type_}*/}
            {/*                </Option>*/}
            {/*            ))}*/}
            {/*        </Select>*/}

            {/*        <Select*/}
            {/*            placeholder="Asc/Desc"*/}
            {/*            onChange={handleSortOrderChange}*/}
            {/*            allowClear="true"*/}
            {/*            defaultValue={sortOrder}*/}
            {/*            style = {{width:'22vw'}}>*/}
            {/*            >*/}
            {/*            {sortDirection.map((type_) => (*/}
            {/*                <Option key={type_} value={type_}>*/}
            {/*                    {type_}*/}
            {/*                </Option>*/}
            {/*            ))}*/}
            {/*        </Select>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <SearchBar handleNeighborhoodFilterChange={handleNeighborhoodFilterChange} handleSortChange={handleSortChange}
                       handleSortOrderChange={handleSortOrderChange} setProductsList={setProductsList}/>

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