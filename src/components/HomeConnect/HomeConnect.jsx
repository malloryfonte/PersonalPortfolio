import React from "react";
import ArrowButton from "./ArrowButton";
import InstaSwiper from "./InstaSwiper";

const HomeConnect = () => {
  return (
    <div className="w-full h-full flex  justify-center pt-[10rem] text-pink-1">
      <div className="w-[1024px] h-[200px]  text-pink-1 ">
        <div className="items-center justify-center flex font-judson w-full h-full">
          <p className="text-[9rem] font-semibold tracking-wide ">
            Let's Connect!
          </p>
        </div>
        <div className="w-full flex  justify-center items-center space-x-5">
          <div className=" h-[3.5rem] bg-pink-1 rounded-[2rem] font-poppins font-semibold text-[30px] py-[5px] px-[30px] text-white ">
            malloryvfonte@gmail.com
          </div>
          <ArrowButton />
        </div>

        <div className="grid grid-cols-3 gap-4"></div>
        <div className="items-center justify-center flex">
          <InstaSwiper />
        </div>
      </div>
    </div>
  );
};

export default HomeConnect;
