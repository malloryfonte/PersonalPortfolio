import React, { useState } from "react";
import {
  BoilerAmbassadorReels,
  CliniqueReels,
  DoveReels,
  SparklingIceReels,
  UnionReels,
} from "../../constants";
import ContentCreationBlock from "./ContentCreationBlock";
import BackgroundStar from "../BackgroundStar";

const ContentCreationBody = () => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-[1024px] flex flex-col pt-20 items-center space-y-20">
      <div className=" font-perandory  w-full flex flex-col items-center justify-center ">
        <div className=" w-full flex items-center justify-center rounded-md ">
          <span className="text-blue-dark text-[12rem]">Content Creation</span>
        </div>
        <div className="w-full items-center justify-center flex flex-col gap-10 overflow-hidden mt-[-20px]">
          <span className="text-[1.5rem] text-center font-judson text-blue-dark">
            My portfolio showcases a diverse range of work that reflects both my
            creativity and versatility as a content creator. It includes
            sponsored posts developed for my personal social media platforms,
            engaging entertainment and lifestyle content tailored for my target
            audience, and branded content produced for external companies across
            various industries. From visually driven Instagram campaigns to
            thoughtfully written blog posts and multi-platform promotional
            strategies, my work highlights a strong understanding of brand
            voice, audience engagement, and storytelling.
          </span>

          <img
            src="/PersonalPortfolio/ContentCreation/LogosGraphic.png"
            className="w-full object-cover scale-125 "
          />
        </div>
      </div>
      <div className="relative w-full h-full ">
        <div className="absolute inset-0 z-0 text-white">
          {/* Top-left star */}
          <BackgroundStar
            top="300px"
            left="-150px"
            size={400}
            rotation={-15}
            opacity={0.3}
          />
        </div>
      </div>

      <ContentCreationBlock
        reels={SparklingIceReels}
        title={"Sparkling Ice"}
        description={[
          `Selected as the Top Ambassador for Sparkling Ice Squad Spring 2025 — meaning I completed the full scope of work promptly, created high-quality content with minimal edits, attended kick-off calls, overcommunicated on questions and concerns regarding deliverables and timelines, and met and exceeded creativity and engagement expectations for activities.`,
          `Collaborated closely with the Sparkling Ice marketing team, actively participating in content creation, reviewing materials, and executed successful sampling initiatives.`,
        ]}
      />
      <div className="relative w-full h-full ">
        <div className="absolute inset-0 z-0 text-white">
          {/* Top-left star */}
          <BackgroundStar
            top="50px"
            left="750px"
            size={500}
            rotation={20}
            opacity={0.4}
          />
        </div>
      </div>
      <ContentCreationBlock
        reels={CliniqueReels}
        title={"Clinique On Campus"}
        description={[
          `Selected as the Top Ambassador for Clinique on Campus Spring 2024`,
          `Cultivated and nurtured a long-term relationship with the brand, ensuring strong ties were maintained over three months`,
          `Collaborated closely with the Clinique and Her Campus marketing team, actively participating in content creation, reviewing materials, and executing successful sampling initiatives`,
          "Demonstrated exceptional organizational skills by consistently meeting campaign and content deadlines",
        ]}
        reverse
      />
      <div className="relative w-full h-full ">
        <div className="absolute inset-0 z-0 text-white">
          {/* Top-left star */}
          <BackgroundStar
            top="50px"
            left="400px"
            size={500}
            rotation={60}
            opacity={0.4}
          />
        </div>
      </div>
      <ContentCreationBlock
        reels={DoveReels}
        title={"Partnership With Dove"}
        description={[
          `Collaborated closely with the Dove marketing team, actively participating in content creation, reviewing materials, and incorporating real-time edits to align with brand guidelines based on direct feedback from the brand`,
          `Produced compelling video content to promote the Dove Volume & Fullness Dry Shampoo at Target, effectively fostering brand affinity`,
          `Demonstrated exceptional organizational skills by consistently meeting campaign and content deadlines while effectively managing tasks and maintaining a structured workflow`,
          "Reached 77k+ users, garnering 88k+ views",
        ]}
      />
      <div className="relative w-full h-full ">
        <div className="absolute inset-0 z-0 text-white">
          {/* Top-left star */}
          <BackgroundStar
            top="0px"
            left="900px"
            size={200}
            rotation={20}
            opacity={0.4}
          />
        </div>
      </div>
      <ContentCreationBlock
        reels={UnionReels}
        title={"Partnership With The Union Club Hotel"}
        description={[
          `For a class competition, we did a collaboration video with the Union Club Hotel at Purdue`,
          `One student was chosen to move on with a sponsored partnership with the brand, and I ended up being awarded that sponsorship`,
          `The sponsored partnership video reached 2.4k+ users, and 68.8% of views came from non-followers`,
          "Collaborated closely with the UCH marketing and social media team",
          `Submersed myself in the Union Club Hotel‘s brand voice and branding guidelines to positively represent the brand from my own perspective`,
        ]}
        reverse
      />
      <div className="relative w-full h-full ">
        <div className="absolute inset-0 z-0 text-white">
          {/* Top-left star */}
          <BackgroundStar
            top="50px"
            left="200px"
            size={600}
            rotation={-15}
            opacity={0.4}
          />
        </div>
      </div>
      <ContentCreationBlock
        reels={BoilerAmbassadorReels}
        title={"Boiler ambassadors"}
        description={[
          `Serve as a Boiler Ambassador at Purdue University, developing engaging digital content to connect with prospective and current students while promoting university life and campus culture.`,
          `Produce high-quality video and photo content for Instagram and YouTube, showcasing student experiences, campus events, and academic opportunities to enhance Purdue’s online presence.`,
          `Achieved a reach of over 200,000 users, leveraging strategic content creation and platform engagement to increase visibility and interaction with Purdue’s digital audience.`,
        ]}
        specificImage={{
          url: "https://youtu.be/h2SyZOJQ6x4?si=ZJQRh_PVYbcQdbud",
          image:
            "/PersonalPortfolio//ContentCreation/BoilerAmbassador/laptopBA.png",
        }}
      />
    </div>
  );
};

export default ContentCreationBody;
