import React from "react";
import { contact } from "../../constants";

const HomeAboutMe = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-stripes-vertical" />
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-blue-light" />

      {/* Content */}
      <div className="relative mx-auto w-[1080px] min-h-screen grid grid-cols-[1fr_420px] grid-rows-[40%_60%] gap-x-10 ">
        {/* Title */}
        <div className="flex items-end pb-10">
          <span className="text-white font-perandory text-[9rem] leading-[.75]">
            A bit about me
          </span>
        </div>

        {/* Image (spans rows) */}
        <div className="row-span-2 flex items-center justify-end">
          <div className="border-[15px] border-blue-dark">
            <img
              src="/PersonalPortfolio/headshot1.jpg"
              className="object-cover w-[25rem] h-[38rem]"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex items-start pt-10">
          <p className="font-judson text-blue-mid text-[1.1rem] leading-tight max-w-full">
            Hi! I’m Mallory, a senior at Purdue University studying
            Communications with concentrations in Public Relations and Mass
            Media, and minoring in General Communications. I’m graduating in May
            2026 and continuing my academic journey with a Master of Science in
            Communications, which I’ll complete remotely by May 2027. Currently,
            I’m excited to be interning with Her Campus Media as a Community and
            Influencer Marketing Intern, while also working as a Marketing
            Intern for SDI Innovations, where I’ve been working since August
            2023. Additionally, I am entering my second year as a Vlogger for
            Boiler Ambassadors, while also taking on a new role as Creative
            Lead. On campus, I’m actively involved with Purdue Student
            Government and Higher Ground Dance Company, where I get to blend my
            love for community, performance, and creativity. Post-grad, my dream
            is to work in industries I’m passionate about, especially beauty,
            music, fashion, entertainment, or sports, helping brands tell
            authentic stories through strategic marketing and PR. Outside of
            school and work, you’ll usually find me at concerts, behind a
            camera, or spending time with my sisters and friends. My long-term
            goals? Build a meaningful career I love, stay creative, and one day,
            adopt a corgi!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
