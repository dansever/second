import React from "react";
import ProductUploadForm from "../components/ProductUpload/ProductUploadForm";
import styled from "styled-components";
import {ArrowLeftOutlined} from "@ant-design/icons";


const Container = styled.div`
  background-color: var(--secondary_green);
`;

const UploadPageHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--primary_green);
  display: flex;
  align-items: center;
  color: white;
  padding: 10px;
`;


export default function ProductUpload() {
    return (
        <Container>
            <UploadPageHeader>
                <ArrowLeftOutlined className={"ArrowLeftOutlined"}/>
            </UploadPageHeader>
            <ProductUploadForm/>
        </Container>
    );
};