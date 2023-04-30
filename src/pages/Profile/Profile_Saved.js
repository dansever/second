import React from "react";
import {Header_Search} from "../../components/Header/Header";
import styled from "styled-components";
import ProfileInfo from "../../components/UserInfo/UserInfo";

const PageContainer = styled.div`
    background-color: var(--secondary_green);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    align-content: center;
    height: 90vh;
    padding-top: 15px;
`;


export default function Profile_Saved() {
    return (
        <div>
            <Header_Search/>
            <PageContainer>
                <ProfileInfo/>
            </PageContainer>
        </div>
    );
}