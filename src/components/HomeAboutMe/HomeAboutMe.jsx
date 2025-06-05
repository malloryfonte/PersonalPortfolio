import React from "react";
import { contact } from "../../constants";

const HomeAboutMe = () => {
  return (
    <div className="w-full h-full flex items-center justify-center  text-pink-1 relative overflow-hidden">
      <div className="absolute left-0 top-0 right-0 w-full h-1/2 bg-cream-1"></div>
      <div className="absolute right-0 bottom-0 w-full h-1/2 bg-black-1"></div>

      <div className="w-[1024px] h-[50rem] flex justify-between relative gap-x-10 ">
        <div className="flex flex-col w-[45rem]">
          <div className="w-full  h-1/2  flex items-center justify-start text-[11rem] pt-[13rem]">
            <p className=" text-black-1 font-perandory">A bit about me</p>
          </div>
          <div className="w-full h-1/2 flex items-start justify-start pt-10">
            <p className="font-judson text-cream-1 text-[1rem]">
              Hi! I’m Mallory — a senior at Purdue University studying
              Communications with concentrations in Public Relations and Mass
              Media, and minoring in General Communications. I’m graduating in
              May 2026 and continuing my academic journey with a Master of
              Science in Communications, which I’ll complete remotely by May
              2027. This summer, I’m excited to be interning at Circle City
              Athletics as a Marketing & Social Media Intern, while also working
              as a Content Creator and Personal Assistant for Katherine Scheele
              Photography. In Fall 2025, I’ll be returning to SDI Innovations as
              a Marketing Intern, after previously working there from August
              2023 to May 2025. On campus, I’m actively involved with Boiler
              Ambassadors and Higher Ground Dance Company, where I get to blend
              my love for community, performance, and creativity. Post-grad, my
              dream is to work in industries I’m passionate about — especially
              beauty, music, fashion, food, or sports — helping brands tell
              authentic stories through strategic marketing and PR. Outside of
              school and work, you’ll usually find me at concerts, behind a
              camera, or spending time with my sisters and friends. My long-term
              goals? Build a meaningful career I love, stay creative — and one
              day, adopt a corgi.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="bg-white rounded-full h-[13rem] w-[13rem] overflow-hidden flex justify-center items-center">
            <img
              src="/PersonalPortfolio//headshot3.JPG"
              className="mt-20 mr-5 scale-110"
            />
          </div>
          <div className="bg-white rounded-full h-[13rem] w-[13rem] overflow-hidden flex justify-center items-center">
            <img src="/PersonalPortfolio//CIRCLEPHOTO2.jpg" className=" " />
          </div>
          <div className="bg-white rounded-full h-[13rem] w-[13rem] overflow-hidden flex justify-center items-center">
            <img src="/PersonalPortfolio//ciricle3.JPG" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
