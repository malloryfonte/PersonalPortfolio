import React from "react";
import Recommendation from "./Recommendation";
import ReversedRecommendation from "./ReversedRecommendation";

const HomeRecommendations = () => {
  return (
    <div className="w-full h-full bg-blue-light justify-center flex flex-col items-center">
      <div className="flex flex-col w-[1280px] justify-center items-center space-y-8">
        <div className="flex flex-col ">
          <span className="font-brasika text-blue-dark text-[6rem] leading-none">
            Why work with me?
          </span>
          <div className="flex justify-end">
            <span className="font-judson text-[2rem] justify-end">
              Take it from the people who know me best!
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-12">
          <Recommendation
            description={[
              `“If you’re looking for someone willing to sit on the sidelines and never contribute anything valuable to your team, Mallory is not your girl.
`,
              `She’s been an intern with SDI Innovations since August 2023. Mallory is one of the hardest-working, most motivated, and most ambitious individuals I’ve ever met. She’s incredibly knowledgeable, yet humble and eager to learn more. She is a doer and a dreamer, so you know you can count on her for big ideas and execution.”`,
            ]}
            image="/PersonalPortfolio/RachelPicture.jpeg"
            name="Rachel Amick"
            title="Digital Media Strategist"
            company="SDI Innovations"
          />
          <ReversedRecommendation
            description=" “Mallory is the kind of employee every manager hopes for—timely, efficient, and consistently reliable. I could always trust her to bring fresh and innovative ideas to the table, all while meeting deadlines with ease. Her creativity is truly a breath of fresh air, and her strong sense of responsibility ensured every project was executed with excellence.
          Beyond her professional skills, Mallory is simply a joy to work with. She’s kind, collaborative, and an inspiring leader to her peers. She brings positivity to every team interaction, and her natural ability to guide others makes her stand out as both a talented creative and a strong mentor.”
         
         "
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
