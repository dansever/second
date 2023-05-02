import React from "react"
import "./Cart.css"
import Navbar from "../../components/Navbar";
import {GeneralHeader} from "../../components/Header";

export default function About() {
    return (
        <div className="cart-page-container">
            <GeneralHeader/>
            <div>Cart</div>
            <Navbar/>
        </div>
    );
}