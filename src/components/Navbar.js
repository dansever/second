import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { CiShoppingCart, CiSquarePlus } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarStyle = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--primary_green);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.25);
  padding:  15px 0;
`;


const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    scale: 110%;
    cursor: pointer;
  }
  &:active {
    scale: 125%;
  }
`;

export default function Navbar () {
    return (
        <NavbarStyle>
            <NavItem>
                <Link to="/Upload">
                    <CiSquarePlus size={36} strokeWidth={1.5} color={"black"}/>
                </Link>
            </NavItem>

            <NavItem>
                <Link to="/Home">
                    <BiHome size={36} strokeWidth={0.5} color={"black"}/>
                </Link>
            </NavItem>

            <NavItem>
                <Link to="/Profile">
                    <HiOutlineUserCircle size={36} strokeWidth={2} color={"black"}/>
                </Link>
            </NavItem>

            {/*<NavItem>*/}
            {/*    <Link to="/Cart">*/}
            {/*        <CiShoppingCart size={36} strokeWidth={1.5} color={"black"}/>*/}
            {/*    </Link>*/}
            {/*</NavItem>*/}

            {/*<NavItem>*/}
            {/*    <Link to="/Search">*/}
            {/*        <HiMagnifyingGlass size={36} strokeWidth={1.5} color={"black"}/>*/}
            {/*    </Link>*/}
            {/*</NavItem>*/}

        </NavbarStyle>
    );
};