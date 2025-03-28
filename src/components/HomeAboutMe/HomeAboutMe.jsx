import React from "react";
import { contact } from "../../constants";

const HomeAboutMe = () => {
  return (
    <div className="w-full h-full flex items-center justify-center  text-pink-1 relative">
      <div className="absolute left-0 top-0 right-0 w-full h-1/2 bg-cream-1"></div>
      <div className="absolute right-0 bottom-0 w-full h-1/2 bg-black-1"></div>

      <div className="w-[1024px] h-[37.5rem] flex justify-between relative gap-x-10 ">
        <div className="flex flex-col w-[45rem]">
          <div className="w-full  h-1/2  flex items-center justify-start text-[11rem] pt-[7rem]">
            <p className=" text-black-1 font-perandory">A bit about me</p>
          </div>
          <div className="w-full h-1/2 flex items-start justify-start pt-10">
            <p className="font-judson text-cream-1">
              I'm a junior studying Communications with concentrations in PR and
              Mass Media at Purdue University. On campus, I'm involved with
              Boiler Ambassadors and Higher Ground Dance company. Off campus,
              I'm currently interning at SDI Innovations as a PD and Cirriculum
              intern, after previously working as a Social Media intern for a
              year and a half. The big dream is to work in marketing or public
              relations, and help develop a brand's image. But, as long as I'm
              happy (and can eventually adopt a corgi) I'm willing to see where
              life takes me! Outside of work and school, I love going to
              concerts, spending time with my sisters and friends, and
              photography!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="bg-white rounded-full h-[12rem] w-[12rem] overflow-hidden flex justify-center items-center">
            <img
              src="/PersonalPortfolio/headshot3.JPG"
              className="mt-20 mr-5 scale-110"
            />
          </div>
          <div className="bg-white rounded-full h-[12rem] w-[12rem] overflow-hidden flex justify-center items-center">
            <img src="/PersonalPortfolio/headshot2.jpg" className=" " />
          </div>
          <div className="bg-white rounded-full h-[12rem] w-[12rem] overflow-hidden flex justify-center items-center">
            <img src="/PersonalPortfolio/headshot2.jpg" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
