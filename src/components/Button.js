import styled from "styled-components";
import "../styles/Index.css"
import Colors from "../color";

export const ButtonStyle = styled.button`
  color: var(--background_white);
  background-image: linear-gradient(to top left, ${Colors.green}, ${Colors.light_green} );
  border-radius: 12px;
  border: none;
  height: 40px;
  //width: 170px;
  margin-left: auto;
  margin-right: auto;
  //display: inline-block;  
  //justify-content: center;
  //text-align: center;
  white-space: nowrap;
  padding: 10px 24px;
  //align-items: center;

  //font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  //background-color: ${({ isFollowing }) => (isFollowing ? "#749A83" : "#F1F7F1" )};
`;

export const applyButton = styled.button`
  color: var(--text_color);
  background-color: var(--baby_pink);
  border-radius: 12px;
  height: 40px;
  width: 170px;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;;
  `;