import React from "react";
import { contact } from "../../constants";

const HomeAboutMe = () => {
  return (
    <div className="w-full h-full flex items-center justify-center pt-[10rem] text-pink-1">
      <div className="w-[1024px] h-[37.5rem] flex justify-between ">
        <div className="w-[25rem] h-[37.5rem] rounded-2xl relative overflow-hidden shadow-card bg-pink-1 items-center flex justify-center ">
          <div className="flex-col w-[15rem]  space-y-4">
            <div className="bg-white rounded-full h-[15rem] w-[15rem] overflow-hidden flex justify-center items-center">
              <img
                src="/headshot1.jpg"
                className=" transform scale-[1.5] ml-4"
              />
            </div>
            <div className="text-pink-2 w-full h-full flex items-center justify-center text-[2rem]">
              <p>Mallory Fonte</p>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <hr class="w-[7.5rem] border-pink-2 border-t-1" />
            </div>
            <div className="text-pink-2 w-full h-full flex items-center justify-center text-[1.5rem]">
              <div className="flex-col text-center">
                <p>Social Media Manager</p>
                <p>Brand Coordinator</p>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="bg-pink-2 w-full h-[4rem] bottom-0 absolute items-center flex justify-center"></div>
        </div>
        <div className="w-[35rem] h-full  flex items-center justify-center ">
          <div className="flex-col">
            <p className="text-[3rem]">A bit about me</p>
            <p>
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
      </div>
    </div>
  );
};

export default HomeAboutMe;
