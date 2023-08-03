import styled from "styled-components";
import "../styles/Index.css"
import Colors from "../color";

export const ButtonStyle = styled.button`
  color: ${Colors.background_white};
  background-image: linear-gradient(to top left, ${Colors.green}, ${Colors.light_green} );
  border-radius: 12px;
  border: none;
  height: 40px;
  cursor: pointer;
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

export const StyledA = styled.a  `
  color:  ${Colors.background_white};
  background-image: linear-gradient(to top left, ${Colors.green}, ${Colors.light_green} );
  border-radius: 12px;
  border: none;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  padding: 10px 24px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

  &:hover, &:active, &:visited, &:link {
    color: ${Colors.background_white};
  };
`

export const BorderedButtonGreen = styled.button `
  white-space: nowrap;
  background: linear-gradient(${Colors.background_white}, ${Colors.background_white}) padding-box,
  linear-gradient(to top left, ${Colors.green}, ${Colors.light_green} ) border-box;
  border-radius: 12px;
  border: 3px solid transparent;
  border-width:5px;
  border-image-slice: 1;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  padding: 10px;

`

export const BorderedRedButton = styled.button`
  white-space: nowrap;
  background: linear-gradient(${Colors.background_white}, ${Colors.background_white}) padding-box,
  linear-gradient(to top left,  #7a1515,#ce1212 ) border-box;
  border-radius: 12px;
  border: 3px solid transparent;
  border-width:5px;
  border-image-slice: 1;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  padding: 10px;



`
//
// export const applyButton = styled.button`
//   color: var(--text_color);
//   background-color: var(--baby_pink);
//   border-radius: 12px;
//   height: 40px;
//   width: 170px;
//   font-weight: 700;
//   box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;;
//   `;