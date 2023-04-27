import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { CiShoppingCart, CiSquarePlus } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./Footer.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {blue, red} from "@mui/material/colors";

const BottomNavbar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--secondary_green);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
`;


export default function Footer () {

    const [active, setActive] = useState("home");

    const handleNavClick = (navItem) => {
        setActive(navItem);
    };

    return (
        <BottomNavbar>

            <div className={`nav-item ${active === "home" ? "active" : ""}`}
                 onClick={() => handleNavClick("home")}>
                <Link to="/">
                    <BiHome size={32} strokeWidth={0.5}
                            color={"black"}/>
                </Link>
            </div>

            <div className={`nav-item ${active === "search" ? "active" : ""}`}
                 onClick={() => handleNavClick("search")}>
                <Link to="/Vans">
                    <HiMagnifyingGlass size={32} strokeWidth={1.5}
                                       color={"black"}/>
                </Link>
            </div>


            <div className={`nav-item ${active === "add" ? "active" : ""}`}
                 onClick={() => handleNavClick("add")}>
                <Link to="/Upload">
                    <CiSquarePlus size={32} strokeWidth={1.5}
                                  color={"black"}/>
                </Link>
            </div>

            <div className={`nav-item ${active === "cart" ? "active" : ""}`}
                 onClick={() => handleNavClick("cart")}>
                <Link to="/Cart">
                    <CiShoppingCart size={32} strokeWidth={1.5}
                                    color={"black"}/>
                </Link>
            </div>

            <div className={`nav-item ${active === "user" ? "active" : ""}`}
                 onClick={() => handleNavClick("user")}>
                <Link to="/Profile">
                    <HiOutlineUserCircle size={32} strokeWidth={2}
                                         color={"black"}/>
                </Link>
            </div>
        </BottomNavbar>
    );
};