import React from "react";
import ArrowButton from "./ArrowButton";
import InstaSwiper from "./InstaSwiper";

const HomeConnect = () => {
  return (
    <div className="w-full p-20 flex  justify-center pt-[10rem] text-pink-1 relative bg-cream-1">
      <div className="absolute bg-black-1 w-full py-10 left-0 top-0"></div>
      <div className="flex-col w-full  h-auto">
        <div className="flex justify-center items-center ">
          <div className="w-[1024px] h-[200px]  text-black-1 ">
            <div className="items-center justify-center flex font-perandory w-full h-full">
              <p className="text-[12rem] tracking-wide ">Let's Connect!</p>
            </div>
          </div>
        </div>
        <div className="w-full flex  justify-center items-center space-x-5 ">
          <div className=" h-[3.5rem] bg-black-1 rounded-[2rem] font-judson font-semibold text-[30px] py-[5px] px-[30px] text-white ">
            malloryvfonte@gmail.com
          </div>
          <ArrowButton text="Resume" link="/Mallory_Fonte_Resume.pdf" />
          <ArrowButton
            text="LinkedIn"
            link="https://www.linkedin.com/in/mallory-fonte-8662a0258/"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeConnect;
