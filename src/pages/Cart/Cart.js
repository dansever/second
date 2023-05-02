import React from "react"
import "./Cart.css"
import Navbar from "../../components/Navbar";
import {Header_Search} from "../../components/Header/Header";

export default function About() {
    return (
        <div className="cart-page-container">
            <Header_Search/>
            <div>Cart</div>
            <Navbar/>
        </div>
    );
}