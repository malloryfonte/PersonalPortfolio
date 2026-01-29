import React from "react";
import { useMediaQuery } from "react-responsive";
import Recommendation from "./Recommendation";
import ReversedRecommendation from "./ReversedRecommendation";
import BackgroundStar from "../BackgroundStar";

const HomeRecommendations = () => {
  const isPhone = useMediaQuery({ maxWidth: 768 });

  const rachelDesc = [
    "If you're looking for someone willing to sit on the sidelines and never contribute anything valuable to your team, Mallory is not your girl.",
    "She's been an intern with SDI Innovations since August 2023. Mallory is one of the hardest-working, most motivated, and most ambitious individuals I've ever met. She's incredibly knowledgeable, yet humble and eager to learn more. She is a doer and a dreamer, so you know you can count on her for big ideas and execution.",
  ];

  const gabbyDesc =
    "Mallory is the kind of employee every manager hopes for—timely, efficient, and consistently reliable. I could always trust her to bring fresh and innovative ideas to the table, all while meeting deadlines with ease. Her creativity is truly a breath of fresh air, and her strong sense of responsibility ensured every project was executed with excellence. Beyond her professional skills, Mallory is simply a joy to work with. She's kind, collaborative, and an inspiring leader to her peers. She brings positivity to every team interaction, and her natural ability to guide others makes her stand out as both a talented creative and a strong mentor.";

  if (isPhone) {
    return (
      <div className="w-full bg-blue-light flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-[680px] space-y-8">
          {/* Mobile star */}
          <div className="relative w-full">
            <div className="absolute -top-6 left-4 z-0 pointer-events-none">
              <BackgroundStar
                top="-20px"
                left="20px"
                size={120}
                rotation={-15}
                opacity={0.06}
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-brasika text-4xl text-blue-dark">
              Why work with me?
            </h2>
            <p className="font-judson text-lg text-blue-dark mt-2">
              Take it from the people who know me best!
            </p>
          </div>

          {/* Rachel */}
          <div className="flex flex-col items-center bg-white rounded-3xl p-6">
            <img
              src="/PersonalPortfolio/RachelPicture.jpeg"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="mt-4 text-center">
              <p className="font-judson text-base text-gray-800">
                {rachelDesc[0]}
              </p>
              <p className="font-judson text-base text-gray-800 mt-3">
                {rachelDesc[1]}
              </p>
            </div>
            <div className="mt-4 bg-blue-dark text-white font-judson p-3 rounded-2xl w-full text-center">
              <div className="font-bold">Rachel Amick</div>
              <div>Digital Media Strategist</div>
              <div className="italic">SDI Innovations</div>
            </div>
          </div>

          {/* Gabrielle */}
          <div className="flex flex-col items-center bg-white rounded-3xl p-6">
            <img
              src="/PersonalPortfolio/RielPicture.jpeg"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="mt-4 text-left">
              <p className="font-judson text-base text-gray-800">{gabbyDesc}</p>
            </div>
            <div className="mt-4 bg-blue-dark text-white font-judson p-3 rounded-2xl w-full text-center">
              <div className="font-bold">Gabrielle Trent</div>
              <div>Brand Manager</div>
              <div className="italic">Purdue Brand Studio</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-blue-light justify-center flex flex-col items-center">
      <div className="flex flex-col w-[1280px] justify-center items-center space-y-8">
        <div className="relative w-full h-full ">
          <div className="absolute inset-0 z-0 ">
            {/* Top-left star */}
            <BackgroundStar
              top="-50px"
              left="150px"
              size={300}
              rotation={-15}
              opacity={0.04}
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="font-brasika text-blue-dark text-[6rem] leading-none z-[1]">
            Why work with me?
          </span>
          <div className="flex justify-end">
            <span className="font-judson text-[2rem] justify-end">
              Take it from the people who know me best!
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-12 z-[2]">
          <Recommendation
            description={rachelDesc}
            image="/PersonalPortfolio/RachelPicture.jpeg"
            name="Rachel Amick"
            title="Digital Media Strategist"
            company="SDI Innovations"
          />
          <ReversedRecommendation
            description={gabbyDesc}
            image="/PersonalPortfolio/RielPicture.jpeg"
            name="Gabrielle Trent"
            title="Brand Manager"
            company="Purdue Brand Studio"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeRecommendations;
