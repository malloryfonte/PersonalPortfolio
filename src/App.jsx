import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";

const App = () => {
  return (
    <BrowserRouter basename="/PersonalPortfolio">
      {/* Replace with your repo name */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/Photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
