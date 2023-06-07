import styled from "styled-components";
import "../styles/Index.css"

export const ButtonStyle = styled.button`
  color: var(--text_color);
  border-radius: 12px;
  height: 40px;
  width: 170px;
  font-family: "Montserrat", sans-serif;
  font-size: medium;
  font-weight: 600;
  box-shadow: 2px 3px 0 0 black;
  &:hover {
    cursor: pointer;
    background-color: var(--secondary_green);
    scale: 101%;
  }
  background-color: ${({ isFollowing }) => (isFollowing ? "#749A83" : "#F1F7F1" )};
`;
