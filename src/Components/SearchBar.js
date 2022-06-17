import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/features/searchSlice";
import { StyledSearchBar } from "./styles/SearchBar.styled";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const setSearchTerm = (e) => {
    dispatch(search(e.target.value));
  };

  return (
    <StyledSearchBar
      onChange={(e) => setSearchTerm(e)}
      placeholder="Find A Pet..."
    />
  );
};
