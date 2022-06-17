import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledPetTile } from "./styles/PetTile.styled.js";
import { StyledMain } from "./styles/Main.styled.js";
import { SearchBar } from "./SearchBar.js";
import { useSelector } from "react-redux";
import { setData as setPetDetails } from "../redux/features/petTilesSlice.js";
import { useDispatch } from "react-redux";
import { select, deselect, clear } from "../redux/features/selectSlice";


const url = "http://eulerity-hackathon.appspot.com/pets";

export function PetTile() {
  const searchTerm = useSelector((state) => state.search);
  const petTiles = useSelector((state) => state.petList.value);
  const toggleSelect = useSelector((state) => state.toggle);
  const isSelected = useSelector((state) => state.toggle);
  const selectedCount = useSelector((state) => state.select.count);

  const dispatch = useDispatch();

  const selectAll = () => {
    if (isSelected) toggleSelect();
    dispatch(clear());
    document.querySelectorAll(StyledPetTile).forEach((el) => {
      el.classList.add("selected");
      dispatch(select());
    });
  };

  const clearAll = () => {
    if (isSelected) toggleSelect();

    document.querySelectorAll(StyledPetTile).forEach((el) => {
      el.classList.remove("selected");
      dispatch(clear());
    });
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch(setPetDetails(res.data));
    });
  }, [url]);

  const handleSelected = (e) => {
    const classList = e.currentTarget.classList;
    classList.toggle("selected");
    classList.contains("selected") ? dispatch(select()) : dispatch(deselect());
  };

  if (!petTiles) {
    return (
      <StyledMain>
        <h1>Loading...</h1>
      </StyledMain>
    );
  } else {
    const displayPet = petTiles
      .filter((pet) => {
        if (searchTerm === "") {
          return pet;
        } else if (
          pet.title.toLowerCase().includes(searchTerm.term.toLowerCase())
        ) {
          return pet;
        }
      })
      .map((pet) => {
        const { title, description, url, created } = pet;

        const parseDate = new Date(created).toLocaleString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
          weekday: "short",
        });
        return (
          <StyledPetTile key={title} onClick={handleSelected}>
            <figure>
              <div className="pet-container">
                <img
                  alt=""
                  src={url}
                  id={title}
                  download={title}
                  className="pet-pic"
                />
              </div>
              <figcaption>{parseDate}</figcaption>
            </figure>
            <div className="pet-description">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </StyledPetTile>
        );
      });
    return (
      <>
        <StyledMain>
          <div className="pets-avail">
            <h2>Pets Available: {petTiles.length}</h2>{" "}
            <h2>Pets Selected: {selectedCount} </h2>
            <SearchBar />
            <section>
              <button onClick={() => clearAll()}>Clear Selected</button>{" "}
              <button onClick={() => selectAll()}> Select All</button>
              <button>Download</button>
            </section>
          </div>
          {displayPet}
        </StyledMain>
      </>
    );
  }
}
