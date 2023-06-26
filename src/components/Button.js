import styled from "styled-components";
import "../styles/Index.css"

export const ButtonStyle = styled.button`
  color: var(--text_color);
  background-color: var(--baby_pink);
  border-radius: 12px;
  height: 40px;
  width: 170px;
  font-weight: 700;
  box-shadow: 2px 3px 0 0 black;
  //background-color: ${({ isFollowing }) => (isFollowing ? "#749A83" : "#F1F7F1" )};
`;

export const applyButton = styled.button`
  color: var(--text_color);
  background-color: var(--baby_pink);
  border-radius: 12px;
  height: 40px;
  width: 170px;
  font-weight: 700;
  box-shadow: 2px 3px 0 0 black;
  `;