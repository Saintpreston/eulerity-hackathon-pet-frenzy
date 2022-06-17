import React from "react";
import {StyledHeader} from "./styles/Header.styled";
import { Link } from "react-router-dom";

export const Header = () =>{


  return(
<StyledHeader><Link to='/' ><h1> Eulerity Adoption Clinic</h1> </Link></StyledHeader>
  )

}