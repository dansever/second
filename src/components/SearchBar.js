import React, {useState} from "react"
import {Select, TreeSelect, ConfigProvider, theme} from "antd";
import {filterDatabase, NeighborhoodDict, sortDirection, sortType} from "../assets/DataSets";

const { Option } = Select;

export default function SearchBar({filter, setFilter, neighborhoodFilter,
                                      setNeighborhoodFilter, setSortBy,
                                      setSortOrder}) {
    const [value, setValue] = useState(undefined);
    const valueMap = {};
    function loops(list, parent) {
        return (list || []).map(({ children, value }) => {
            const node = (valueMap[value] = {
                parent,
                value
            });
            node.children = loops(children, node);
            return node;
        });
    }

    loops(filterDatabase);

    const updateFilter = (pairs) => {
        setFilter((oldState) => {
            return {...pairs};
        })
    };

    const updateNeighborhoodFilter = (values) => {
        setNeighborhoodFilter(values)
    };

    return (
        <div className={"filter-sort-container"}>
            <ConfigProvider
                theme={{
                    "token": {
                        "colorPrimaryBorder": "#11998E",
                        "colorPrimaryBorderHover": "#11998E",
                        "colorPrimaryHover": "#11998E",
                        "colorPrimary": "#11998E",
                        "wireframe": false
                    },
                }}
            >
            <div>

                <TreeSelect
                    // style={{
                    //         "colorPrimaryBorder": "#11998E",
                    //         "colorPrimaryBorderHover": "#11998E",
                    //         "colorPrimaryHover": "#11998E",
                    //         "colorPrimary": "#11998E",
                    //     }}
                    treeData = {filterDatabase}
                    treeCheckable
                    allowClear="true"
                    showCheckedStrategy="SHOW_CHILD"
                    placeholder="Filter by"
                    onChange={(titles,values)=> {
                        const result = {};
                        for(let i=0 ; i<titles.length ; i++ ){
                            const [category, value] = titles[i].split('_');
                            if ( !result[category]) {
                                result[category] = []
                            }
                            result[category] = [...result[category], value];
                        }
                        updateFilter(result)
                    }}
                    // onSelect = {onSelect}
                    style={{ width: '93vw' }}
                />
            </div>

            <div>

                <TreeSelect
                    treeData = {NeighborhoodDict}
                    // treeCheckable
                    multiple = {true}
                    defaultValue={[]}
                    allowClear="true"
                    showCheckedStrategy="SHOW_CHILD"
                    placeholder="Neighborhood"
                    onChange={(titles,values) => updateNeighborhoodFilter(values)}
                    style={{ width: '45vw' }}
                />

                <Select
                    placeholder="Sort by"
                    onChange={(value)=> {setSortBy(value)}}
                    allowClear="true"
                    // defaultValue={'tokens'}
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
                    onChange={(value)=> {setSortOrder(value)}}
                    allowClear="true"
                    // defaultValue={'asc'}
                    style = {{width:'22vw'}}>
                    >
                    {sortDirection.map((type_) => (
                        <Option key={type_} value={type_}>
                            {type_}
                        </Option>
                    ))}
                </Select>

            </div>
            </ConfigProvider>
        </div>
    );
};