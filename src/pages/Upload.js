import React from "react";
import ProductUploadForm from "../components/ProductUpload/ProductUploadForm";
import styled from "styled-components";
import Header_Back_Arrow from "../components/Header";


const Container = styled.div`
  background-color: var(--secondary_green);
  height: 100%;
  overflow: auto;
  //padding-left: 10px;
`;

const PageTitle = styled.div`
  position: absolute;
  top: 6px;
  left: 40%;
  font-family: 'Lora', serif;
  font-size: 36px;
`;

export default function Upload() {
    return (
        <div>
            <Container>
                <Header_Back_Arrow/>
                <PageTitle>Upload</PageTitle>
                <ProductUploadForm/>
            </Container>
        </div>
    );
};