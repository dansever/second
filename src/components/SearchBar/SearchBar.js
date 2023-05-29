import React, {useState} from "react"
import "./SearchBar.css"
import {FilterButton, SortButton} from "../Buttons/Button";
import {Form, Select, TreeSelect} from "antd";

const { TreeNode } = TreeSelect;


export default function SearchBar(props) {
    const [neighborhoods, setNeighborhoods] = useState([])
    const handleSelectionChange = (selectedValues) => {
        setNeighborhoods(selectedValues);
        console.log('neighborhoods:', neighborhoods);
        console.log('selectedValues:', selectedValues);

    };

    return (
        <div>
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
                onChange={handleSelectionChange}
                defaultValue={props.userNeighborhood}
                style={{ width: '50vw' }}
            />

        </div>
    );
};


//         <div className={"search-bar-container"}>
//             <SortButton />
//             <FilterButton />
//         </div>
//     )
// }
//
