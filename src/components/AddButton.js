import React from "react";
import styled from "styled-components";
import "../styles/Index.css"

export  const Button = styled.button`
  background-color: var(--dark_green);
  color: var(--text_color);
  border-radius: 10px;
  height: 40px;
  width: 190px;
  font-size: medium;
  font-weight: bold;
  box-shadow: 5px 5px 0 0 black;
  &:hover {
    cursor: pointer;
    font-size: 105%;
    width: 190px;
  }
`;