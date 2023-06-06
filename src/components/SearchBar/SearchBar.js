import React, {useState} from "react"
import "./SearchBar.css"
import { Select, TreeSelect} from "antd";
import {filterDatabase, NeighborhoodDict, sortBy, sortDirection, sortType, sortTypes} from "../../assets/DataSets";

const { Option } = Select;

export default function SearchBar() {
    const [neighborhoods, setNeighborhoods] = useState([])
    const [sortBy, setSortBy] = useState('')
    const [sortOrder, setSortOrder] = useState('')

    const handleNeighborhoodFilterChange = (selectedValues) => {
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
