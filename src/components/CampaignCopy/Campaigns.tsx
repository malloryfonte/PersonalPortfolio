import React from "react";
import LargeNavigation from "../LargeNavigation";
import SideLinks from "../SideLinks";
import ScrollTop from "../../pages/ScrollTop";
import BackArrow from "../BackArrow";

interface CampaignProps {
  description?: string;
  images: [string];
}
const Campaigns = ({ description, images }: CampaignProps) => {
  return (
    <div className=" max-w-screen min-h-screen flex-col bg-blue-dark">
      <ScrollTop />
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />
      <BackArrow link="/CampaignsCopy" />

      <div className=" w-full bg-blue-dark flex items-center justify-center">
        <div className="w-[1024px] pb-[3rem] flex flex-col items-center justify-center pt-[5rem] space-y-5 ">
          <p className="text-[1.5rem] font-carattere text-blue-light pt-5 pl-2 ">
            {description}
          </p>
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`campaignImg ${idx + 1}`}
              className="w-full object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
