import React from "react";
import { BiHome , BiHeart } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "../styles/Navbar.css"


export default function Navbar () {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/Home">
                    <BiHome size={36} strokeWidth={0.5}/>
                </CustomLink>
                <CustomLink to="/Upload">
                    <CiSquarePlus size={36} strokeWidth={1.5}/>
                </CustomLink>
                <CustomLink to="/Cart">
                    <BiHeart size={36} strokeWidth={0.5}/>
                </CustomLink>
                <CustomLink to="/Profile/MyShop">
                    <HiOutlineUserCircle size={36} strokeWidth={2} />
                </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}