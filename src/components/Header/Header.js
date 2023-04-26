import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import "../../styles/Main.css";
import Logo from "../Logo"

function Header() {
    const navRef = useRef();

    const showHeader = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <Logo/>
            <nav className="NavBar" ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Contact</a>
                <a href="/#">About</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showHeader}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showHeader}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;