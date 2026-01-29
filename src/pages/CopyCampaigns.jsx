import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import CampaignsCopyBody from "../components/CampaignCopy/CampaignsCopyBody";
import ScrollTop from "./ScrollTop";
import { useMediaQuery } from "react-responsive";
import { SmallNavigation } from "../components/SmallNavigation";

const CopyCampaigns = () => {
  const isPhoneScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <div className=" max-w-screen min-h-screen bg-blue-light flex flex-col ">
      <ScrollTop />
      {isPhoneScreen ? (
        <div className="fixed bottom-0 z-10 w-full md:hidden">
          <SmallNavigation />
        </div>
      ) : (
        <>
          <div className="fixed top-0 z-10 w-full hidden md:block">
            <LargeNavigation />
          </div>
          <SideLinks />
        </>
      )}

      <div className="w-full flex justify-center px-4 md:px-0 pt-20 md:pt-0">
        <CampaignsCopyBody isPhoneScreen={isPhoneScreen} />
      </div>
    </div>
  );
};

export default CopyCampaigns;
