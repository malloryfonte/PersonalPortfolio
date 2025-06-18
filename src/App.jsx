import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";
import ContentCreation from "./pages/ContentCreation";
import CopyCampaigns from "./pages/CopyCampaigns";
import BilliePage from "./components/CampaignCopy/BilliePage";
import DateBookPage from "./components/CampaignCopy/DateBookPage";
import DuolingoPage from "./components/CampaignCopy/DuolingoPage";

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
        <Route path="/CampaignsCopy" element={<CopyCampaigns />} />
        <Route path="/CampaignsCopy/BillieEilish" element={<BilliePage />} />
        <Route path="/CampaignsCopy/Datebookstore" element={<DateBookPage />} />
        <Route path="/CampaignsCopy/Duolingo" element={<DuolingoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
