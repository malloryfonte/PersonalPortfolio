import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe/HomeAboutMe";
import HomeConnect from "../components/HomeConnect/HomeConnect";
import ScrollTop from "./ScrollTop";
import HomeRecommendations from "../components/HomeRecommendations/HomeRecommendations";

const Home = () => {
  return (
    <div className=" max-w-screen min-h-[70vh] md:min-h-screen flex-col font-perandory bg-blue-light overflow-hidden">
      <ScrollTop />
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className="h-[clamp(600px,100vh,900px)] w-full bg-blue-dark">
        <HomeIntro />
      </div>

      <div className="h-[clamp(600px,100vh,900px)]  w-full">
        <HomeAboutMe />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full  border-t-[100px] border-blue-dark pt-20" />
      </div>

      <div className="min-h-[70vh] md:min-h-screen w-full  pb-[12rem]">
        <HomeRecommendations />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full  border-t-[100px] border-blue-dark" />
      </div>

      <div className=" w-full min-h-[70vh] md:min-h-screen pt-20">
        <div className="flex w-full h-full items-center justify-center ">
          <div className=" w-[1080px] h-full flex flex-col items-center justify-center ">
            <span className="text-white font-perandory mb-[-3rem] text-[11rem] text-justify leading-none">
              GET TO KNOW ME
            </span>
            <img
              src="/PersonalPortfolio/scrapboard.png"
              className="w-full object-cover scale-125 ml-[12.5rem]"
            />
          </div>
        </div>
      </div>

      <HomeConnect />
    </div>
  );
};

export default Home;
