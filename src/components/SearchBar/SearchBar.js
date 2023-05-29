import React, {useState} from "react"
import "./SearchBar.css"
import {FilterButton, SortButton} from "../Buttons/Button";
import {Button, Dropdown, Form, Select, Space, TreeSelect} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";

const { TreeNode } = TreeSelect;
const { Option } = Select;

const sort_types = ['by name', 'by price'];

const sort = [
    {
        label: 'by name',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'by price',
        key: '1',
        icon: <UserOutlined />,
    },
]


export default function SearchBar(props) {
    const [neighborhoods, setNeighborhoods] = useState([])
    const [sortBy, setSortBy] = useState('')

    const handleFilterChange = (selectedValues) => {
        setNeighborhoods(selectedValues);
    };
    const handleSortChange = (selectedValue) => {
        setSortBy(selectedValue);
    };


    return (
        <div className={"filter-sort-container"}>

            <TreeSelect
                treeData={[
                    {title: 'Jerusalem', value: 'jerusalem',
                        children: [
                            { title: 'Rehavia', value: 'rehavia' },
                            { title: 'Nahlaot', value: 'nahlaot' },
                            { title: 'City Central', value: 'city_central' },
                            { title: 'Talbia', value: 'talbia' },
                            { title: 'Katamon', value: 'katamon' },
                            // { title: props.userNeighborhood, value:'s' },
                        ],
                    },
                    {title: 'Tel Aviv', value: 'tel_aviv',
                        children: [
                            { title: 'Old North', value: 'old_north' },
                            { title: 'New North', value: 'new_north' },
                            { title: 'Lev Ha`ir', value: 'lev_hair' },
                            { title: 'Jaffo', value: 'jaffo' },
                            { title: 'Florentin', value: 'florentin' },
                        ],
                    },
                ]}
                treeCheckable
                allowClear="true"
                showCheckedStrategy="SHOW_CHILD"
                placeholder="Select Neighborhood/s"
                onChange={handleFilterChange}
                defaultValue={props.userNeighborhood}
                style={{ width: '50vw' }}
            />

            <Select
                placeholder="Sort By..."
                onChange={handleSortChange}
                style = {{width:'30vw'}}>
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
