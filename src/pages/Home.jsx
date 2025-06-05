import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe/HomeAboutMe";
import HomeConnect from "../components/HomeConnect/HomeConnect";

const Home = () => {
  return (
    <div className=" w-screen min-h-screen flex-col font-perandory">
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className="h-full w-full ">
        <HomeIntro />
      </div>

      <div className="h-screen w-full">
        <HomeAboutMe />
      </div>

      <div className=" h-auto w-full ">
        <HomeConnect />
      </div>
    </div>
  );
};

export default Home;
