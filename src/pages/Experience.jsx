import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import ExperienceBody from "../components/Experience/ExperienceBody";

const Experience = () => {
  return (
    <div className="bg-pink-2/50 w-screen h-screen flex-col font-judson">
      <div className="sticky top-0 z-10 hidden md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center ">
        <ExperienceBody />
      </div>
    </div>
  );
};

export default Experience;
