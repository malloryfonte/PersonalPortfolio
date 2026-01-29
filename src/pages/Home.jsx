import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe/HomeAboutMe";
import HomeConnect from "../components/HomeConnect/HomeConnect";
import ScrollTop from "./ScrollTop";
import HomeRecommendations from "../components/HomeRecommendations/HomeRecommendations";
import BackgroundStar from "../components/BackgroundStar";
import { useMediaQuery } from "react-responsive";
import { SmallNavigation } from "../components/SmallNavigation";

const Home = () => {
  const isPhoneScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="max-w-screen min-h-[70vh] md:min-h-screen flex flex-col font-perandory bg-blue-light overflow-hidden">
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

      <div className="md:h-[clamp(600px,100vh,900px)] w-full bg-blue-dark ">
        <HomeIntro />
      </div>

      <div className="md:h-[clamp(600px,100vh,900px)]  w-full">
        <HomeAboutMe />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full border-t-[100px] border-blue-dark pt-20" />
      </div>

      <div className="min-h-[70vh] md:min-h-screen w-full  pb-[12rem]">
        <HomeRecommendations />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full border-t-[100px] border-blue-dark" />
      </div>

      <div className="w-full min-h-[70vh] md:min-h-screen pt-20">
        {isPhoneScreen ? (
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="w-full text-center text-white font-perandory text-[4rem]  -mt-[2rem] leading-tight">
              GET TO KNOW ME
            </h2>
            <div className="w-full flex justify-end">
              <img
                src="/PersonalPortfolio/scrapboard.png"
                className="w-[125%] max-w-none ml-auto -mr-[4rem] h-auto object-cover"
                alt="scrapboard"
              />
            </div>
          </div>
        ) : (
          <div className="flex w-full h-full items-center justify-center">
            <div className="w-[1080px] h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 z-0">
                  {/* Top-left star */}
                  <BackgroundStar
                    top="-100px"
                    left="-100px"
                    size={500}
                    rotation={45}
                    opacity={0.05}
                  />

                  {/* bottom left star */}
                  <BackgroundStar
                    top="450px"
                    left="50px"
                    size={300}
                    rotation={-30}
                    opacity={0.05}
                  />

                  <BackgroundStar
                    top="300px"
                    left="800px"
                    size={500}
                    rotation={30}
                    opacity={0.05}
                  />
                </div>
              </div>
              <span className="text-white font-perandory mb-[-3rem] md:text-[11rem] text-[6rem] text-justify leading-none z-[1]">
                GET TO KNOW ME
              </span>
              <img
                src="/PersonalPortfolio/scrapboard.png"
                className="w-full object-cover md:scale-125 scale-100 md:ml-[12.5rem] ml-0 z-[1]"
              />
            </div>
          </div>
        )}
      </div>

      <HomeConnect />
    </div>
  );
};

export default Home;
