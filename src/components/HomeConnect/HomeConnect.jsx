import React from "react";
import ArrowButton from "./ArrowButton";
import InstaSwiper from "./InstaSwiper";

const HomeConnect = () => {
  return (
    <div className="w-full p-20 flex  justify-center pt-[10rem] text-pink-1 relative ">
      <div className="flex-col w-full  h-auto">
        <div className="flex justify-center items-center ">
          <div className="w-[1024px] h-[200px]  text-blue-dark ">
            <div className="items-center justify-center flex font-perandory w-full h-full">
              <p className="text-[12rem] tracking-wide ">Let's Connect!</p>
            </div>
          </div>
        </div>
        <div className="w-full flex  justify-center items-center space-x-5 ">
          <div className=" h-[3.5rem] bg-blue-dark rounded-[2rem] font-judson font-semibold text-[30px] py-[5px] px-[30px] text-white ">
            malloryvfonte@gmail.com
          </div>
          <ArrowButton
            text="Resume"
            link="/PersonalPortfolio/Mallory_Fonte_Resume.pdf"
            newTab={true}
            background="#40476d"
          />
          <ArrowButton
            text="LinkedIn"
            link="https://www.linkedin.com/in/mallory-fonte-8662a0258/"
            newTab={true}
            background="#40476d"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeConnect;
