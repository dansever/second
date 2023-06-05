import React, {useContext, useEffect, useState} from "react"
import "./SearchBar.css"
import {FilterButton, SortButton} from "../Buttons/Button";
import {Button, Dropdown, Form, Select, Space, TreeSelect} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {AuthContext} from "../AuthProvider";

const { TreeNode } = TreeSelect;
const { Option } = Select;

const sort_types = ['name', 'price'];

const neighborhoodDatabase = [
    {
        title: 'Jerusalem', value: 'jerusalem',
        children: [
            { title: 'Rehavia',     value: 'rehavia' },
            { title: 'Nahlaot',     value: 'nahlaot' },
            { title: 'City Central',value: 'city_central' },
            { title: 'Talbia',      value: 'talbia' },
            { title: 'Katamon',     value: 'katamon' },
            ],
    },
    {
        title: 'Tel Aviv', value: 'tel_aviv',
        children: [
            { title: 'Old North',   value: 'old_north' },
            { title: 'New North',   value: 'new_north' },
            { title: 'Lev Ha`ir',   value: 'lev_hair' },
            { title: 'Jaffo',       value: 'jaffo' },
            { title: 'Florentin',   value: 'florentin' },
        ],
    },
];

const FilterDatabase = [
    {
        title: 'Size', value: 'size',
        children: [
            { title: 'XS',      value: 'xs' },
            { title: 'S',       value: 's' },
            { title: 'M',       value: 'm' },
            { title: 'L',       value: 'l' },
            { title: 'XL',      value: 'xl' },
            { title: 'One Size',value: 'one_size' },
        ],
    },
    {
        title: 'Gender', value: 'gender',
        children: [
            { title: 'Male',    value: 'male' },
            { title: 'Female',  value: 'female' },
            { title: 'Unisex',  value: 'unisex' },
        ],
    },
];

export default function SearchBar() {
    const [neighborhoods, setNeighborhoods] = useState([])
    const [sortBy, setSortBy] = useState('')
    const currentUser = useContext(AuthContext);


    const handleNeighborhoodFilterChange = (selectedValues) => {
        setNeighborhoods(selectedValues);
    };
    const handleSortChange = (selectedValue) => {
        setSortBy(selectedValue);
    };


    useEffect(() => {

    }, []);

    return (
        <div className={"filter-sort-container"}>

            <TreeSelect
                treeData = {neighborhoodDatabase}
                treeCheckable
                allowClear="true"
                showCheckedStrategy="SHOW_CHILD"
                placeholder="Neighborhood"
                onChange={handleNeighborhoodFilterChange}
                style={{ width: '35vw' }}
            />

            <TreeSelect
                treeData = {FilterDatabase}
                treeCheckable
                allowClear="true"
                showCheckedStrategy="SHOW_CHILD"
                placeholder="Filter by"
                onChange={handleNeighborhoodFilterChange}
                style={{ width: '35vw' }}
            />

            <Select
                placeholder="Sort by"
                onChange={handleSortChange}
                allowClear="true"
                style = {{width:'25vw'}}>
                >
                {sort_types.map((type_) => (
                    <Option key={type_} value={type_}>
                        {type_}
                    </Option>
                ))}
            </Select>

        </div>
    );
};
