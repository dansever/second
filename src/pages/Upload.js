import React from "react";
import styled from "styled-components";
import "../styles/Index.css"
import UploadForm from "../components/UploadForm";
import Navbar from "../components/Navbar"
import {GeneralHeader} from "../components/Header";

const Container = styled.div`
  background-color: var(--light_green);
  height: 100%;
  overflow: auto;
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
`;

export default function Upload() {
    return (
        <div>
            <GeneralHeader/>
            <Container>
                <div className={"page-title"}>Upload an Item</div>
                <UploadForm/>
            </Container>
            <Navbar/>
        </div>
    );
};