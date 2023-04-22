import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { CiShoppingCart, CiSquarePlus } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
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
                <BiHome size={32}/>
            </div>
            <div
                className={`nav-item ${active === "search" ? "active" : ""}`}
                onClick={() => handleNavClick("search")}
            >
                <HiMagnifyingGlass size={32}/>
            </div>
            <div
                className={`nav-item ${active === "add" ? "active" : ""}`}
                onClick={() => handleNavClick("add")}
            >
                <CiSquarePlus size={32}/>
            </div>
            <div
                className={`nav-item ${active === "cart" ? "active" : ""}`}
                onClick={() => handleNavClick("cart")}
            >
                <CiShoppingCart size={32}/>
            </div>
            <div
                className={`nav-item ${active === "user" ? "active" : ""}`}
                onClick={() => handleNavClick("user")}
            >
                <HiOutlineUserCircle size={32}/>
            </div>
        </div>
    );
};

export default BottomNavbar;
