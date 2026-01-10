import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";
import ContentCreation from "./pages/ContentCreation";
import CopyCampaigns from "./pages/CopyCampaigns";
import Campaigns from "./components/CampaignCopy/Campaigns";
import DateBookPage from "./components/CampaignCopy/DateBookPage";
import DuolingoPage from "./components/CampaignCopy/DuolingoPage";
import { Billie, ConanEmma, SmoshFlip7 } from "./constants";

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
        <Route
          path="/CampaignsCopy/BillieEilish"
          element={
            <Campaigns
              images={Billie}
              description=" This campaign was developed as a class project and centers around a
            hypothetical album release for Billie Eilish. I created a full PR
            strategy, including media outreach, event planning, and brand
            collaborations to generate buzz and connect with Gen Z audiences.
            While not affiliated with Billie Eilish or her team, this project
            showcases my ability to craft compelling campaigns and think
            strategically about artist branding and fan engagement."
            />
          }
        />
        <Route
          path="/CampaignsCopy/ChamberlainCoffeeConanGray"
          element={<Campaigns images={ConanEmma} />}
        />
        <Route
          path="/CampaignsCopy/SmoshFlip7"
          element={<Campaigns images={SmoshFlip7} />}
        />
        <Route path="/CampaignsCopy/Datebookstore" element={<DateBookPage />} />
        <Route path="/CampaignsCopy/Duolingo" element={<DuolingoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
