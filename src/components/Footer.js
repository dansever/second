import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { CiShoppingCart, CiSquarePlus } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "../styles/Footer.css";

const BottomNavbar = () => {
    const [active, setActive] = useState("home");

    const handleNavClick = (navItem) => {
        setActive(navItem);
    };

    return (
        <div className="bottom-navbar">
            <div
                className={`nav-item ${active === "home" ? "active" : ""}`}
                onClick={() => handleNavClick("home")}
            >
                <BiHome size={24}/>
                <p>Home</p>
            </div>
            <div
                className={`nav-item ${active === "search" ? "active" : ""}`}
                onClick={() => handleNavClick("search")}
            >
                <HiMagnifyingGlass size={24}/>
                <p>Search</p>
            </div>
            <div
                className={`nav-item ${active === "add" ? "active" : ""}`}
                onClick={() => handleNavClick("add")}
            >
                <CiSquarePlus size={24}/>
                <p>Add</p>
            </div>
            <div
                className={`nav-item ${active === "heart" ? "active" : ""}`}
                onClick={() => handleNavClick("heart")}
            >
                <CiShoppingCart size={24}/>
                <p>CiShoppingCart</p>
            </div>
        </div>
    );
};

export default BottomNavbar;
