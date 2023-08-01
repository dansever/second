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

                <CustomLink to="/LikedPage">
                    <BiHeart size={36} strokeWidth={0.5}/>
                </CustomLink>

                <CustomLink to="/Profile">
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
// import React from "react";
// import { BiHome , BiHeart } from "react-icons/bi";
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { CiSquarePlus } from "react-icons/ci";
// import {Link, useMatch, useResolvedPath} from "react-router-dom";
// import "../styles/Navbar.css"
// import Colors from "../color.js";
//
//
//
// export default function Navbar () {
//     const getPageBackgroundColor = (path) => {
//         switch (path) {
//             case "/Home":
//                 return Colors.baby_pink; // Set the background color for Home page
//             case "/Upload":
//                 return Colors.light_blue; // Set the background color for Upload page
//             case "/LikedPage":
//                 return Colors.orangie; // Set the background color for LikedPage
//             case "/Profile":
//                 return Colors.yelloww; // Set the background color for Profile page
//             default:
//                 return Colors.background; // Set a default background color
//         }
//     };
//
//
//
//     const resolvedPath = useResolvedPath(window.location.pathname);
//     const pageBackgroundColor = getPageBackgroundColor(resolvedPath.pathname);
//     return (
//         <nav className={"nav"} style={{ backgroundColor: pageBackgroundColor }}>
//             <ul>
//                 <CustomLink to="/Home">
//                     <BiHome size={36} strokeWidth={0.5}/>
//                 </CustomLink>
//
//                 <CustomLink to="/Upload">
//                     <CiSquarePlus size={36} strokeWidth={1.5}/>
//                 </CustomLink>
//
//                 <CustomLink to="/LikedPage">
//                     <BiHeart size={36} strokeWidth={0.5}/>
//                 </CustomLink>
//
//                 <CustomLink to="/Profile">
//                     <HiOutlineUserCircle size={36} strokeWidth={2} />
//                 </CustomLink>
//             </ul>
//         </nav>
//     )
// }
//
// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }