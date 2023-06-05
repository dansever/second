import React, {useContext, useState} from "react"
import "./SearchBar.css"
import { Select, TreeSelect} from "antd";
import {AuthContext} from "../AuthProvider";
import {filterDatabase, NeighborhoodDict, sortTypes} from "../../assets/DataSets";

const { Option } = Select;

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

    return (
        <div className={"filter-sort-container"}>

            <TreeSelect
                treeData = {NeighborhoodDict}
                treeCheckable
                allowClear="true"
                showCheckedStrategy="SHOW_CHILD"
                placeholder="Neighborhood"
                onChange={handleNeighborhoodFilterChange}
                style={{ width: '35vw' }}
            />

            <TreeSelect
                treeData = {filterDatabase}
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
                {sortTypes.map((type_) => (
                    <Option key={type_} value={type_}>
                        {type_}
                    </Option>
                ))}
            </Select>

        </div>
    );
};
