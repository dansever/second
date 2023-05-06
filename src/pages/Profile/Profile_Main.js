import React from "react";
import {useNavigate} from "react-router";
import {Radio} from "antd";
import styled from "styled-components";


export const PageContainer = styled.div`
  background-color: var(--off_white);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-content: center;
  height: 90vh;
  padding: 15px 30px 0 30px;
  row-gap: 20px;
`;

export function ProfileOptions () {
    const navigate = useNavigate();
    return (
        <Radio.Group size={"large"} buttonStyle={"solid"} defaultValue={"MyShop"}>
            <Radio.Button onClick={() => navigate("/Profile/MyShop")} value="MyShop">My Shop</Radio.Button>
            <Radio.Button  onClick={() => navigate("/Profile/Saved")} value="Saved">Saved Items</Radio.Button>
            <Radio.Button onClick={() => navigate("/Profile/Sellers")} value="Sellers">Sellers</Radio.Button>
        </Radio.Group>
    );
}