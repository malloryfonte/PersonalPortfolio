import React from "react";
import LargeNavigation from "../LargeNavigation";
import SideLinks from "../SideLinks";
import { Billie } from "../../constants";
import ScrollTop from "../../pages/ScrollTop";
import BackArrow from "../BackArrow";

const BilliePage = () => {
  const images = Billie[0].images;

  return (
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
            This campaign was developed as a class project and centers around a
            hypothetical album release for Billie Eilish. I created a full PR
            strategy, including media outreach, event planning, and brand
            collaborations to generate buzz and connect with Gen Z audiences.
            While not affiliated with Billie Eilish or her team, this project
            showcases my ability to craft compelling campaigns and think
            strategically about artist branding and fan engagement.
          </p>
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Billie ${idx + 1}`}
              className="w-full object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BilliePage;
