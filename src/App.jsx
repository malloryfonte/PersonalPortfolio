import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";
import ContentCreation from "./pages/ContentCreation";

const App = () => {
  return (
    <Router basename="/PersonalPortfolio">
      {/* Replace with your repo name */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/ContentCreation" element={<ContentCreation />} />
      </Routes>
    </Router>
  );
};

export default App;
