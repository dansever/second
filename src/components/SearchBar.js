import React, {useState} from "react"
// import "./SearchBar.css"
import { Select, TreeSelect} from "antd";
import {filterDatabase, NeighborhoodDict, sortBy, sortDirection, sortType, sortTypes} from "../assets/DataSets";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../firebase";

const { Option } = Select;

export default function SearchBar(props) {
    const [neighborhoods, setNeighborhoods] = useState([])
    const [sortBy, setSortBy] = useState('')
    const [sortOrder, setSortOrder] = useState('')
    let userQuery = collection(db,'products');
   // let data = userQuery.get().docs();
   // alert(data[0]);

    const [size,setSize] = useState([]);
    const [gender,setGender] = useState([]);
    const [type,setType] = useState([]);
    const [condition,setCondition] = useState([]);


    const handleNeighborhoodFilterChange = async (selectedValues) => {
        alert(selectedValues);
        userQuery = query(userQuery,where('seller_neighborhood', '==', selectedValues));
        const snapshot = await getDocs(userQuery);
        const filteredData = snapshot.docs.map((doc) => doc.data());
        props.setProductsList(filteredData);
        alert(filteredData);
    };

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

    function getPath(value) {
        const path = [];
        let current = valueMap[value];
        while (current) {
            path.unshift(current.value);
            current = current.parent;
        }
        return path;
    }


    const onChange = (value, title, extra) => {
        // alert("Change: " + getPath(value));
        // // setValue({ value });
        // alert(extra);


    };

    const fetchData = async () => {
        const snapshot = await getDocs(userQuery);
        const filteredData = snapshot.docs.map((doc) => doc.data());
        console.log(filteredData); // Log the data to the console
    };


    const onSelect = async (selected) => {
        let select = getPath(selected);
        let filterBy = select[0];
        let value = select[1];
        if(filterBy === "size"){
            // setSize([...size, value]);
            // value = value.toUpperCase();
            userQuery = query(userQuery,where('size', '==', value));
        }
        if(filterBy === "gender"){
            // setGender([...gender, value]);
            userQuery = query(userQuery,where('gender', '==', value));
        }
        if(filterBy === "type"){
            // setType([...type, value]);
            userQuery = query(userQuery,where('type', '==', value));
        }
        if(filterBy === "condition"){
            // setCondition([...condition, value]);
            userQuery = query(userQuery,where('condition', '==', value));
        }
        const snapshot = await getDocs(userQuery);
        const filteredData = snapshot.docs.map((doc) => doc.data());
        props.setProductsList(filteredData);
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
                    onChange={onChange}
                    onSelect = {onSelect}
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
                    onChange={props.handleSortChange}
                    allowClear="true"
                    defaultValue={'tokens'}
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
                    onChange={props.handleSortOrderChange}
                    allowClear="true"
                    defaultValue={'asc'}
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
