import React from "react";
import LargeNavigation from "../LargeNavigation";
import SideLinks from "../SideLinks";
import ScrollTop from "../../pages/ScrollTop";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import BackArrow from "../BackArrow";
const BilliePage = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div className=" max-w-screen min-h-screen flex-col bg-black-1">
        <ScrollTop />
        <div className="fixed top-0 z-10 hidden w-full md:block">
          <LargeNavigation />
        </div>

        <SideLinks />
        <BackArrow link="/CampaignsCopy" />

        <div className=" w-full bg-black-1 flex items-center justify-center">
          <div className="w-[1024px] pb-[3rem] flex flex-col items-center justify-center pt-[5rem] space-y-5 ">
            <p className="text-[1.5rem] font-carattere text-cream-1 pt-5 pl-2">
              This short paper analyzes Duolingo’s unorthodox approach to social
              media marketing, focusing on its “unhinged” campaign strategy on
              TikTok. It explores target audiences, message strategies, and
              media channels, and evaluates the campaign’s effectiveness in
              reaching younger demographics.
            </p>
            <Viewer
              fileUrl="/PersonalPortfolio//Campaigns/Duolingo/Duolingo.pdf"
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </div>
        </div>
      </div>
    </Worker>
  );
};

export default BilliePage;
