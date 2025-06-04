import React from "react";
import { experience } from "../../constants";
import { useState } from "react";
import ArrowButton from "../HomeConnect/ArrowButton";
import { graphicnav } from "../../constants";
import ToolTag from "./ToolTag";

const ExperienceBody = () => {
  const [activeSection, setActiveSection] = useState(experience[0].id);
  const [fade, setFade] = useState(true);

  // Function to handle button click
  const groupedExperience = experience.reduce((acc, expItem) => {
    // Group by section title
    if (!acc[expItem.sectiontitle]) {
      acc[expItem.sectiontitle] = [];
    }
    acc[expItem.sectiontitle].push(expItem);
    return acc;
  }, {});

  return (
    <div className="w-[1024px] flex flex-col items-center pb-[6rem]">
      <div className="text-[12rem] font-perandory pt-20 text-black-1 ">
        <p className="m-0">Experience</p>
      </div>
      <div className="w-full mt-[-3rem] rounded-sm grid grid-cols-1 md:grid-cols-6">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-2 col-span-1 ">
          <ToolTag label="Canva" />
          <ToolTag label="Adobe Creative Suite" />
          <ToolTag label="Google Workspace" />
          <ToolTag label="Microsoft Office" />
          <ToolTag label="CapCut" />
        </div>

        {/* Center Title */}
        <div className="flex flex-col items-center col-span-4    h-full mt-[-.5rem]">
          <p className="text-[8rem] font-perandory text-black-1 text-center leading-tight">
            Digital Literacy
          </p>
          <ArrowButton
            text="Resume"
            link="/PersonalPortfolio/Mallory_Fonte_Resume.pdf"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-end gap-2 col-span-1">
          <ToolTag label="Sprout Social" />
          <ToolTag label="Hootsuite" />
          <ToolTag label="Buffer" />
          <ToolTag label="Meta Business Suite" />
          <ToolTag label="iMovie" />
        </div>
      </div>

      {Object.keys(groupedExperience).map((sectionTitle) => (
        <div key={sectionTitle} className="w-full">
          {/* Section Title */}
          <div className="text-[8rem] font-perandory text-cream-1 flex items-center justify-center bg-pink-2 h-[10rem] mt-[2rem] rounded-sm">
            <p className="m-0 mt-[2rem]">{sectionTitle}</p>
          </div>

          {/* Loop through experiences in this section */}
          {groupedExperience[sectionTitle].map((expItem) => (
            <div key={expItem.id} className="">
              {/* Job Title */}
              <div className="text-[2rem] font-judson text-black-1 flex items-center justify-start border-pink-2 border-b-4 pt-[3rem]">
                <p>{expItem.jobtitle}</p>
              </div>

              {/* At (Social Media Handle) */}
              {expItem.at && (
                <div>
                  <p className="text-[2rem] font-judson text-black-1 flex">
                    Instagram account affiliated: {expItem.at}
                  </p>
                </div>
              )}

              {/* Bullet Points */}
              <div className="space-y-3 mt-10">
                <ul className="list-disc list-inside text-[1.5rem] font-judson text-black-1">
                  {expItem.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExperienceBody;
