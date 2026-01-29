import React from "react";
import ArrowButton from "./ArrowButton";
import InstaSwiper from "./InstaSwiper";

const HomeConnect = () => {
  return (
    <div className="w-full px-4 md:px-20 flex justify-center  md:pt-[10rem] text-pink-1 relative">
      <div className="flex-col w-full h-auto max-w-[1200px]">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[1024px] h-auto md:h-[200px] text-blue-dark">
            <div className="items-center justify-center flex font-perandory w-full h-full">
              <p className="text-5xl md:text-[12rem] tracking-wide text-center md:text-left">
                Let's Connect!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 mt-6">
          <div className="w-full md:w-auto">
            <div className="h-[3.5rem] bg-blue-dark rounded-[2rem] font-judson font-semibold text-lg md:text-[30px]  px-6 md:px-[30px] text-white w-full text-center items-center justify-center flex">
              <span>malloryvfonte@gmail.com</span>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="w-full md:w-auto">
              <ArrowButton
                text="Resume"
                link="/PersonalPortfolio/Mallory_Fonte_Resume.pdf"
                newTab={true}
                background="#40476d"
              />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="w-full md:w-auto">
              <ArrowButton
                text="LinkedIn"
                link="https://www.linkedin.com/in/mallory-fonte-8662a0258/"
                newTab={true}
                background="#40476d"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeConnect;
