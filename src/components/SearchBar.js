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

    // const getItemNeighborhood = (key) => {
    //     productsCollectionRef.child(key).on()
    // }

    // const handleNeighborhoodFilterChange = async (selectedValues) => {
    //     try {
    //         const sortedProductsCollectionRef = userQuery(productsCollectionRef,
    //             orderBy("tokens", "desc"));
    //         // const data = await getDocs(sortedProductsCollectionRef);
    //         const filteredData = userQuery(productsCollectionRef, where("user_id", "==", selectedValues));
    //         //     data.docs.map((doc) => ({
    //         //     ...doc.data(),
    //         //     id: doc.id
    //         // }));
    //         setProductsList(filteredData);
    //     } catch (err) {
    //         console.error(err);
    //     }
    //     setNeighborhoods(selectedValues);
    // };
    // const handleSortChange = (selectedValue) => {
    //     setSortBy(selectedValue);
    // };
    //
    // const handleSortOrderChange = (selectedValue) => {
    //     setSortOrder(selectedValue);
    // };
    // const handleChange =(value, title, extra) => {
    //     // const filteredData = userQuery(productsCollectionRef, where(title, "==", value));
    //     //         //     data.docs.map((doc) => ({
    //     //         //     ...doc.data(),
    //     //         //     id: doc.id
    //     //         // }));
    //     //         setProductsList(filteredData);
    //     // alert(value);
    //     // alert(title);
    //     // alert(extra);
    // }
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
        // alert(filterBy)
        // alert(value)
    // && !size.includes(value)
        if(filterBy === "size"){
            // setSize([...size, value]);
            // value = value.toUpperCase();
            userQuery = query(userQuery,where('size', '==', value));
            // await fetchData(userQuery);

        }
        if(filterBy === "gender"){
            // setGender([...gender, value]);
            userQuery = query(userQuery,where('gender', '==', value));
        }
        if(filterBy === "type"){
            setType([...type, value]);
            userQuery = query(userQuery,where('type', '==', value));
        }
        if(filterBy === "condition"){
            setCondition([...condition, value]);
            userQuery = query(userQuery,where('condition', '==', value));
        }
        // const items = userQuery.docs.map((doc) => {
        //     alert("doc.data()");
        //  return doc.data();
        //
        //     });
        // alert(items);
        // const dataQuery = await getDocs(userQuery(productsCollectionRef, where(filterBy, "==", value)));
        // const filteredData = dataQuery.docs.map((doc) => ({
        //     ...doc.data(),
        //     id: doc.id
        // }));
        // onValue(starCountRef, (snapshot) => {
        //     const data = snapshot.val();
        //     updateStarCount(postElement, data);
        // });
        const snapshot = await getDocs(userQuery);
        const filteredData = snapshot.docs.map((doc) => doc.data());
        // alert(filteredData);
        props.setProductsList(filteredData);
        // alert("label: " + filterBy +" value: "+value);
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
                    onChange={props.handleNeighborhoodFilterChange}
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
