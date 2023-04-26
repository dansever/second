import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { CiShoppingCart, CiSquarePlus } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./Footer.css";


const Footer = () => {
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
                <BiHome size={32} strokeWidth={0.5}/>
            </div>
            <div
                className={`nav-item ${active === "search" ? "active" : ""}`}
                onClick={() => handleNavClick("search")}
            >
                <HiMagnifyingGlass size={32} strokeWidth={1}/>
            </div>
            <div
                className={`nav-item ${active === "add" ? "active" : ""}`}
                onClick={() => handleNavClick("add")}
            >
                <CiSquarePlus size={32} strokeWidth={1.5}/>
            </div>
            <div
                className={`nav-item ${active === "cart" ? "active" : ""}`}
                onClick={() => handleNavClick("cart")}
            >
                <CiShoppingCart size={32} strokeWidth={1}/>
            </div>
            <div
                className={`nav-item ${active === "user" ? "active" : ""}`}
                onClick={() => handleNavClick("user")}
            >
                <HiOutlineUserCircle size={32} strokeWidth={2}/>
            </div>
        </div>
    );
};

export default Footer;
