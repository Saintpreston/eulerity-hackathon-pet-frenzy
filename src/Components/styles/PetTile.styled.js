import styled from "styled-components";

export const StyledPetTile = styled.article`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  width: 20%;
  min-width: 200px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 2%; 
  box-shadow: 10px 5px 18px rgba(4, 3, 3, 0.28); 
  transition: all 200ms;
  justify-content: center;
  
  @media (max-width: 1280px) {
    width: 25%
  }

  @media (max-width: 950px) {
    width: 40%
  }
  @media (max-width: 850px) {
    width: 75%;

   
    figcaption{
      display:none;
    }
  }

  &:hover{
  transform: scale(1.05,1.05);
  box-shadow: 12px 8px 18px rgba(4, 3, 3, 0.28); 

  }


  figure{
  width: 100%;
  height: 65%;

  figcaption{
    text-align: center;
  }
}

h4{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-left: 5%;
}

.pet-container{
 width: 100%;
 height: 100%;
  background-color: rgb(194, 194, 194);

  img{
  width: 100%;
 height: 100%;
}
}


.pet-description{
  width: 90%;
  height: 20%;
   text-align: left;

   p{
  font-family: 'Lucida Sans', Arial, sans-serif;
  padding-top: 10px;
  padding-left: 5%;
  font-size: .9rem;
}

 }

.selected{
border: solid;
border-width: 3px;
border-color: rgb(0, 115, 255);
}
`