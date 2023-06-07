import React, {useState} from "react"
import "./SearchBar.css"
import { Select, TreeSelect} from "antd";
import {filterDatabase, NeighborhoodDict, sortBy, sortDirection, sortType, sortTypes} from "../../assets/DataSets";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../firebase";

const { Option } = Select;

export default function SearchBar(setProductsList) {
    const [neighborhoods, setNeighborhoods] = useState([])
    const [sortBy, setSortBy] = useState('')
    const [sortOrder, setSortOrder] = useState('')
    const productsCollectionRef = collection(db,'products');

    const getItemNeighborhood = (key) => {
        productsCollectionRef.child(key).on()
    }
    const handleNeighborhoodFilterChange = async (selectedValues) => {
        try {
            const sortedProductsCollectionRef = query(productsCollectionRef,
                orderBy("tokens", "desc"));
            // const data = await getDocs(sortedProductsCollectionRef);
            const filteredData = query(productsCollectionRef, where("user_id", "==", selectedValues));
            //     data.docs.map((doc) => ({
            //     ...doc.data(),
            //     id: doc.id
            // }));
            setProductsList(filteredData);
        } catch (err) {
            console.error(err);
        }
        setNeighborhoods(selectedValues);
    };
    const handleSortChange = (selectedValue) => {
        setSortBy(selectedValue);
    };

    const handleSortOrderChange = (selectedValue) => {
        setSortOrder(selectedValue);
    };

    return (
        <div className={"filter-sort-container"}>

            <div>
                <TreeSelect
                    treeData = {filterDatabase}
                    treeCheckable
                    allowClear="true"
                    showCheckedStrategy="SHOW_CHILD"
                    placeholder="Filter by"
                    onChange={handleNeighborhoodFilterChange}
                    style={{ width: '93vw' }}
                />
            </div>

            <div>

                <TreeSelect
                    treeData = {NeighborhoodDict}
                    treeCheckable
                    defaultValue={neighborhoods}
                    allowClear="true"
                    showCheckedStrategy="SHOW_CHILD"
                    placeholder="Neighborhood"
                    onChange={handleNeighborhoodFilterChange}
                    style={{ width: '45vw' }}
                />

                <Select
                    placeholder="Sort by"
                    onChange={handleSortChange}
                    allowClear="true"
                    defaultValue={"tokens"}
                    style = {{width:'24vw'}}>
                    >
                    {sortType.map((type_) => (
                        <Option key={type_} value={type_}>
                            {type_}
                        </Option>
                    ))}
                </Select>

                <Select
                    placeholder="Asc/Desc"
                    onChange={handleSortOrderChange}
                    allowClear="true"
                    defaultValue={"asc"}
                    style = {{width:'22vw'}}>
                    >
                    {sortDirection.map((type_) => (
                        <Option key={type_} value={type_}>
                            {type_}
                        </Option>
                    ))}
                </Select>

            </div>
        </div>
    );
};
