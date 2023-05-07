import React from "react";
import styled from "styled-components";
import "../styles/Index.css"
import UploadForm from "../components/UploadForm";
import Navbar from "../components/Navbar"
import {GeneralHeader} from "../components/Header";
import {ScrollView} from "react-native";

const Container = styled.div`
  background-color: var(--light_green);
  overflow: auto;
  padding: 60px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

export default function Upload() {
    return (
        <div>
            <GeneralHeader/>
            <ScrollView>
            <Container>
                <div className={"page-title"}>Upload an Item</div>
                <UploadForm/>
            </Container>
            </ScrollView>
            <Navbar/>
        </div>
    );
};