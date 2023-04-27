import React from "react"
import { Link } from "react-router-dom"
import "./About.css"
import second_hand_clothes from "../../assets/images/second_hand_clothes.jpg"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={second_hand_clothes} className="second_hand_clothes_image" />
            <div className="about-page-content">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat</p>
            </div>
        </div>
    );
}