import React from "react";
import { PetTile } from "./Components/PetTile";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
    <div className="App">
      <Header /> 
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/adopt" element={<PetTile />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
