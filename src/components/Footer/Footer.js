import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { CiShoppingCart, CiSquarePlus } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./Footer.css";
import {Link} from "react-router-dom";
import styled from "styled-components";


const button = styled.button`
`;
export default function Footer () {
    const [active, setActive] = useState("home");

    const handleNavClick = (navItem) => {
        setActive(navItem);
    };

    return (
        <div className="bottom-navbar">
            <div
                className={`nav-item ${active === "home" ? "active" : ""}`}
                onClick={() => handleNavClick("home")}>
                <Link to="/"/>
                <BiHome size={32} strokeWidth={0.5}/>
            </div>

            <div
                className={`nav-item ${active === "search" ? "active" : ""}`}
                onClick={() => handleNavClick("search")}>
                <Link to="/"/>
                <HiMagnifyingGlass size={32} strokeWidth={1}/>
            </div>

            <div
                className={`nav-item ${active === "add" ? "active" : ""}`}
                onClick={() => handleNavClick("add")}>
                <Link to="/upload"/>
                <CiSquarePlus size={32} strokeWidth={1.5}/>
            </div>

            <div
                className={`nav-item ${active === "cart" ? "active" : ""}`}
                onClick={() => handleNavClick("cart")}>
                <Link to="/"/>
                <CiShoppingCart size={32} strokeWidth={1}/>
            </div>

            <div
                className={`nav-item ${active === "user" ? "active" : ""}`}
                onClick={() => handleNavClick("user")}>
                <Link to="/profile"/>
                <HiOutlineUserCircle size={32} strokeWidth={2}/>
            </div>

        </div>
    );
};