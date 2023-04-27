import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Index.css"
import "./Home.css"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to .second</h1>
            <h2>Donating and receiving second hand clothes has
            never been easier</h2>
            <p>Join us and help save our planet, and your bank account!</p>
            <Link to="vans"
                  style={{backgroundColor:"lightblue",
                  color:"black"}}>
                Find your new clothes
            </Link>
        </div>
    )
};