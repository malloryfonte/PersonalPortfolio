import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe/HomeAboutMe";
import HomeConnect from "../components/HomeConnect/HomeConnect";
import { contact } from "../constants";

const Home = () => {
  return (
    <div className="bg-pink-2/50 w-screen min-h-screen flex-col">
      <div className="sticky top-0 z-10 hidden md:block">
        <LargeNavigation />
      </div>

      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-[4rem]  flex flex-col items-center justify-center space-y-4">
        {contact.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            className="text-pink-1 hover:text-pink-3 transition-colors"
            target={contact.target}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 24 24"
              height="36"
              width="36"
            >
              <path d={contact.path}></path>
            </svg>
          </a>
        ))}
      </div>

      <div className="h-screen w-full">
        <HomeIntro />
      </div>

      <div className="h-screen w-full">
        <HomeAboutMe />
      </div>

      <div className="h-screen w-full">
        <HomeConnect />
      </div>
    </div>
  );
};

export default Home;
