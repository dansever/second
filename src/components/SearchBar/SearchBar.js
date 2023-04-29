import React, {useState} from "react"
import "./SearchBar.css"
import { HiMagnifyingGlass } from "react-icons/hi2";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import {FilterButton, SortButton} from "../Buttons/Button";


export default function SearchBar() {
    // const [obj, setObj] = useState({});
    // const [sort, setSort] = useState({ sort: "rating", order: "desc" });
    // const [filterGenre, setFilterGenre] = useState([]);

    return (
        <div className={"search-bar-container"}>
            <SortButton />
            <FilterButton />
        </div>
        // <div className="filter_container">
        //     <Sort sort={sort} setSort={(sort) => setSort(sort)} />
        //     <Filter
        //         filterGenre={filterGenre}
        //         genres={obj.genres ? obj.genres : []}
        //         setFilterGenre={(genre) => setFilterGenre(genre)}
        //     />
        // </div>
    )
}

