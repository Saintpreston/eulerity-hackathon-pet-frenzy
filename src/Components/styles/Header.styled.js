import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100vw;
margin: auto;
display: flex;
flex-wrap: wrap;
height: fit-content;
justify-content: space-evenly;
align-items: center;

    a{
      text-decoration: none;
      &:visited{
        color: black;
      }
      &:hover{
      font-style:bold;
      text-decoration: underline;
      color: rgb(0, 115, 255);
      }
    }

   h1{
    padding-top: 10px;
   font-family: 'Lucida Grande',sans-serif;
   text-align: center;
  }
`