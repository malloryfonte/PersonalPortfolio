import React from "react";
import { useEffect, useState } from "react";

const LargeTitle = () => {
  const [nameSlide, setnameSlide] = useState(false);
  const [portfolioSlide, setportfolioSlide] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setnameSlide(true);
    }, 50);

    const portfolioTimer = setTimeout(() => {
      setportfolioSlide(true);
    }, 600);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(portfolioTimer);
    };
  }, []);
  return (
    <div className="w-[1024px] h-[250px] text-black-1 ">
      <div
        className={`items-center justify-center font-perandory flex flex-col w-full h-full  transition-all duration-500 ease-in-out  ${
          nameSlide
            ? "translate-x-0 opacity-100"
            : "translate-x-[-60px] opacity-0"
        }`}
      >
        <span className="text-[12rem] ">Mallory Fonte</span>
        <span className="text-[2.5rem] inline-block scale-x-[1.75] mt-[-5rem] mr-[12rem]">
          CREATIVE DIRECTOR & STRATEGIST
        </span>
      </div>

      <div
        className={`justify-end w-full flex  mt-[-7.5rem] font-caraterre transition-all duration-500 ease-in-out ${
          portfolioSlide
            ? "translate-x-0 opacity-100"
            : "translate-x-[-100px] opacity-0"
        }`}
      >
        <p className="text-[8rem] text-pink-1">portfolio</p>
      </div>
    </div>
  );
};

export default LargeTitle;
