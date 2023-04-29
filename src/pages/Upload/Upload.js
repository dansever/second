import React from "react";
import ProductUploadForm from "../../components/ProductUpload/ProductUploadForm";
import styled from "styled-components";
import { Header_Upload } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"

const Container = styled.div`
  background-color: var(--secondary_green);
  height: 100%;
  overflow: auto;
  padding: 0 0 20px 0;
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
                <Header_Upload/>
                <PageTitle>Upload</PageTitle>
                <ProductUploadForm/>
            </Container>
            <Footer/>
        </div>
    );
};