import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Index.css"
import "./Home.css"
import Header_Home from "../../components/Header/Header";
import styled from "styled-components";
import {AcceptChallenge , RefuseChallenge} from "../../components/Buttons/Button"



export default function Home() {
    return (
        <div>
            <Header_Home/>
            <div className="home-container">
                <div className="weekly-challenge">
                    <AcceptChallenge/>
                    <RefuseChallenge/>
                </div>
            </div>
        </div>
    )
};