import React from "react"
import "./SearchBar.css"
import {FilterButton, SortButton} from "../Buttons/Button";


export default function SearchBar() {
    return (
        <div className={"search-bar-container"}>
            <SortButton />
            <FilterButton />
        </div>
    )
}

