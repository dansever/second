import React from "react";
import UploadForm from "../components/UploadForm";
import styled from "styled-components";
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

const PageTitle = styled.div`
  margin-left: auto;
  margin-right: auto;

  font-family: 'Lora', serif;
  font-size: 36px;
`;

export default function Upload() {
    return (
        <div>
            <GeneralHeader/>
            <Container>
                <PageTitle>Upload an Item</PageTitle>
                <UploadForm/>
            </Container>
            <Navbar/>
        </div>
    );
};