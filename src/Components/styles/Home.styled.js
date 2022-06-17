import styled from "styled-components";

export const StyledHome = styled.main`

display:flex;
justify-content: center;
align-items: center;
height: 50vh;
flex-wrap: wrap;
flex-direction: column;

a{
    text-decoration: none;

  }

h1{

  font-size: 10em;
  transition: all 300ms;
  
  &:hover{
    transform: rotate(45deg);
  }
}

p{
  
  font-size: 2em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

`