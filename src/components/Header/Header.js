import React from "react";
import "../../styles/Index.css";
import "./Header.css";
import styled from "styled-components";
import {ArrowLeftOutlined, SettingFilled} from "@ant-design/icons";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--primary_green);
  display: flex;
  align-items: center;
`;

export default function Header_Back_Arrow() {
    return (
        <Container style={{
            justifyContent: "flex-start",
            paddingLeft: "10px"}}>
            <ArrowLeftOutlined className={"btn"}
                               style={{fontSize: '36px' }}/>
        </Container>
    )
}

export function Header_Settings () {
    return (
        <Container style={{
            justifyContent: "flex-end",
            paddingRight: "10px"}}>
            <SettingFilled className={"btn"}
                           style={{fontSize: '36px' }}/>
        </Container>
    )
}