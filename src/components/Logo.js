import React from "react";
import styled from "styled-components";
import second_logo from "../assets/images/second-logo.png"

const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// const AppName = styled.div`
//   background-color: transparent;
//   font-family: 'Lora', serif;
//   font-weight: bold;
//   font-size: 30px;
//  `;
//

export default function Logo() {
    return (
        <Container>
            <img src={second_logo} alt={second_logo}
                 style={{width:"70px", height:"50px"}}/>
            {/*<AppName>.second</AppName>*/}
        </Container>
    );
};