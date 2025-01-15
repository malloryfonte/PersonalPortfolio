import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe/HomeAboutMe";
import HomeConnect from "../components/HomeConnect/HomeConnect";

const Home = () => {
  return (
    <div className="bg-pink-2/50 w-screen min-h-screen flex-col font-judson">
      <div className="sticky top-0 z-10 hidden md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className="h-screen w-full">
        <HomeIntro />
      </div>

      <div className="h-screen w-full">
        <HomeAboutMe />
      </div>

      <div className=" w-full ">
        <HomeConnect />
      </div>
    </div>
  );
};

export default Home;
