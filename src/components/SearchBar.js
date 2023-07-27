import React, {useState} from "react"
// import "./SearchBar.css"
import {Select, TreeSelect} from "antd";
import {filterDatabase, NeighborhoodDict, sortDirection, sortType} from "../assets/DataSets";

const { Option } = Select;

export default function SearchBar({filter, setFilter, neighborhoodFilter, setNeighborhoodFilter, setSortBy, setSortOrder}) {
    // const [sortBy, setSortBy] = useState('')
    // const [sortOrder, setSortOrder] = useState('')
    // let userQuery= collection(db,'products');
   // let data = userQuery.get().docs();
   // alert(data[0]);

    // const [size,setSize] = useState([]);
    // const [gender,setGender] = useState([]);
    // const [type,setType] = useState([]);
    // const [condition,setCondition] = useState([]);
    // const [neighborhoods, setNeighborhoods] = useState([])





    // const handleNeighborhoodFilterChange = async (selectedValues, title) => {
    //     if(title.length === 0){
    //         userQuery= collection(db,'products');
    //         setNeighborhoods([]);
    //         if(size.length !== 0){
    //             userQuery = query(userQuery,where('size', '==', size[0]));
    //         }
    //         if(gender.length !== 0){
    //             userQuery = query(userQuery,where('gender', '==', gender[0]));
    //         }
    //         if(type.length !== 0){
    //             userQuery = query(userQuery,where('type', '==', type[0]));
    //         }
    //         if(condition.length !== 0){
    //             userQuery = query(userQuery,where('condition', '==', condition[0]));
    //         }
    //
    //     }
    //     else {
    //         userQuery = query(userQuery,where('seller_neighborhood', '==', title[0]));
    //         // console.log(title);
    //         setNeighborhoods(title);
    //     }
    //     const snapshot = await getDocs(userQuery);
    //     const filteredData = snapshot.docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id
    //     }));
    //     props.setProductsList(filteredData);
    // };

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

    // function getPath(value) {
    //     const path = [];
    //     let current = valueMap[value];
    //     while (current) {
    //         path.unshift(current.value);
    //         current = current.parent;
    //     }
    //     return path;
    // }


    const updateFilter = (pairs) => {
        setFilter((oldState) => {
            return {...pairs};
        })
    };

    const updateNeighborhoodFilter = (values) => {
        setNeighborhoodFilter(values)
    };

    // console.log(neighborhoodFilter);



        // if (value.length === 0) {
        //     userQuery = collection(db, 'products');
        //     setSize([]);
        //     setType([]);
        //     setGender([]);
        //     setCondition([]);
        //     // console.log("neighborhoods.length: "+neighborhoods.length);
        //     // console.log(neighborhoods);
        //     if(neighborhoods.length !== 0){
        //         userQuery = query(userQuery,where('seller_neighborhood', '==', neighborhoods[0]));
        //     }
        // }
        // const snapshot = await getDocs(userQuery);
        // const filteredData = snapshot.docs.map((doc) => ({
        //     ...doc.data(),
        //     id: doc.id
        // }));
        // props.setProductsList(filteredData);




    // const fetchData = async () => {
    //     const snapshot = await getDocs(userQuery);
    //     const filteredData = snapshot.docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id
    //     }));
    //     // console.log(filteredData); // Log the data to the console
    // };


    // const onSelect = async (selected) => {
    //     const select = getPath(selected);
    //     const filterBy = select[0];
    //     const value = select[1];
    //     console.log(filterBy, value);
        // setFilter((oldState) => {
        //     const newState = {...oldState}
        //     newState[filterBy] =  [...newState[filterBy], value]
        // })
        // TODO to delete
        // if(filterBy === "size"){
        //     setSize([...size, value]);
        //     // value = value.toUpperCase();
        //     userQuery = query(userQuery,where('size', '==', value));
        // }
        // if(filterBy === "gender"){
        //     setGender([...gender, value]);
        //     userQuery = query(userQuery,where('gender', '==', value));
        // }
        // if(filterBy === "type"){
        //     setType([...type, value]);
        //     userQuery = query(userQuery,where('type', '==', value));
        // }
        // if(filterBy === "condition"){
        //     setCondition([...condition, value]);
        //     userQuery = query(userQuery,where('condition', '==', value));
        // }
        // const snapshot = await getDocs(userQuery);
        // const filteredData = snapshot.docs.map((doc) => ({
        //     ...doc.data(),
        //     id: doc.id
        // }));
        // props.setProductsList(filteredData);
    // };

    return (
        <div className={"filter-sort-container"}>

            <div>
                <TreeSelect
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
        </div>
    );
};
