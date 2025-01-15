import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GraphicDesign from "./pages/GraphicDesign";

const App = () => {
  return (
    <BrowserRouter basename="">
      {/* Replace with your repo name */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
