import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { StyledHome } from "./styles/Home.styled";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <StyledHeader />
      <StyledHome>
        {" "}
        <Link to="/adopt">
          <h1>🐶</h1>
        </Link>
        <p>Welcome to our Adoption Clinic, click on the dog to get started.</p>
      </StyledHome>
    </>
  );
};
