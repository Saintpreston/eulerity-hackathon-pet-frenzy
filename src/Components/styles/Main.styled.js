import styled from "styled-components";

export const StyledMain = styled.main`
width: 90vw;
margin: auto;
display: flex;
flex-wrap: wrap;
height: fit-content;
gap: 15px;
justify-content: center;

  h1{
    margin: auto;
    padding-top: 20%;
    font-family: 'Verdana', sans-serif;
  }


.pets-avail{
  margin: 20px 40% 10px 40%;
  h2{
    text-align: center;
    font-family: 'Lucida Grande';
    padding-bottom: 10px;
  }
}

/* section{
 display: flex;
width: 30vw;
margin: auto;
} */
button{
  background: none;
  border:none;
  color: rgb(0, 115, 255);
  text-decoration: underline;
  margin: 0;
  padding: 0% 0%;
  font-size: 1.01em;
  
  &:hover{
    color: rgb(20, 215, 55);
    text-decoration: none;
  }
}

`