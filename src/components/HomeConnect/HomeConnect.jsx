import React from "react";
import ArrowButton from "./ArrowButton";
import InstaSwiper from "./InstaSwiper";

const HomeConnect = () => {
  return (
    <div className="w-full min-h-screen flex  justify-center pt-[10rem] text-pink-1 ">
      <div className="flex-col w-full  h-auto">
        <div className="flex justify-center items-center">
          <div className="w-[1024px] h-[200px]  text-pink-1 ">
            <div className="items-center justify-center flex font-judson w-full h-full">
              <p className="text-[9rem] font-semibold tracking-wide ">
                Let's Connect!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex  justify-center items-center space-x-5">
          <div className=" h-[3.5rem] bg-pink-1 rounded-[2rem] font-poppins font-semibold text-[30px] py-[5px] px-[30px] text-white ">
            malloryvfonte@gmail.com
          </div>
          <ArrowButton text="Resume" link="/Mallory_Fonte_Resume.pdf" />
          <ArrowButton
            text="LinkedIn"
            link="https://www.linkedin.com/in/mallory-fonte-8662a0258/"
          />
        </div>

        <div className="items-center justify-center flex">
          <InstaSwiper />
        </div>
      </div>
    </div>
  );
};

export default HomeConnect;
