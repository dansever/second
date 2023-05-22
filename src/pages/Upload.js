import React, {useContext} from "react";
import styled from "styled-components";
import "../styles/Index.css"
import "../styles/Upload.css"
import UploadForm from "../components/UploadForm";
import Navbar from "../components/Navbar"
import MainHeader from "../components/Header";
import {AuthContext} from "../components/AuthProvider";

const Container = styled.div`
  background-color: var(--light_green);
  overflow: auto;
  padding: 60px 10px 0 10px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  row-gap: 20px;
`;

export default function Upload() {
    const currentUser = useContext(AuthContext);

    return (
        <div>
            {currentUser ?
                ( <MainHeader email={currentUser.email}/> )
                :
                ( <MainHeader email={null}/> )
            }
            <Container>
                <header>Upload an Item</header>
                <UploadForm/>
            </Container>
            <Navbar/>
        </div>
    );
};