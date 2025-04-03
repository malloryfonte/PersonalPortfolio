import React from "react";
import { experience } from "../../constants";
import { useState } from "react";
import ArrowButton from "../HomeConnect/ArrowButton";
import { graphicnav } from "../../constants";

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
      <div className="text-[12rem] font-perandory pt-20 text-black-1">
        <p className="m-0">Experience</p>
      </div>

      <ArrowButton text="Resume" link="/Mallory_Fonte_Resume.pdf" />
      {Object.keys(groupedExperience).map((sectionTitle) => (
        <div key={sectionTitle} className="">
          {/* Section Title */}
          <div className="text-[8rem] font-perandory text-cream-1 flex items-center justify-center bg-pink-2 h-[10rem] mt-[2rem]">
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
              <div className="">
                <p className="text-[2rem] font-judson text-black-1 flex">
                  {expItem.at}
                </p>
              </div>

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
