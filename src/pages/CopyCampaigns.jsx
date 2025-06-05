import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import CampaignsCopyBody from "../components/CampaignCopy/CampaignsCopyBody";

const CopyCampaigns = () => {
  return (
    <div className=" max-w-screen min-h-screen bg-cream-1 flex flex-col ">
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className=" w-full bg-cream-1 items-center flex justify-center ">
        <CampaignsCopyBody />
      </div>
    </div>
  );
};

export default CopyCampaigns;
